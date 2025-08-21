#!/usr/bin/env node

require('@babel/register')({
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        [
            '@babel/preset-react',
            {
                runtime: 'automatic', // Use the new JSX transform
            },
        ],
        '@babel/preset-typescript',
    ],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./'],
                alias: {
                    '@': './src',
                    // Add other aliases if necessary
                },
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        ],
    ],
});

const fs = require('fs');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const cheerio = require('cheerio');
const { htmlToText } = require('html-to-text');

const rootDir = path.join(__dirname, '..', 'src', 'courses');

function getLearningModuleDirs(dir) {
    let learningModuleDirs = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            if (entry.name === 'learning-module') {
                learningModuleDirs.push(fullPath);
            } else {
                learningModuleDirs = learningModuleDirs.concat(getLearningModuleDirs(fullPath));
            }
        }
    }

    return learningModuleDirs;
}

function getTSXFiles(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    let tsxFiles = [];

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            tsxFiles = tsxFiles.concat(getTSXFiles(fullPath));
        } else if (entry.isFile() && entry.name.endsWith('.tsx')) {
            tsxFiles.push(fullPath);
        }
    }

    return tsxFiles;
}

function extractTextFromComponent(PageComponent, props = {}) {
    try {
        const element = React.createElement(PageComponent, props);
        const htmlString = ReactDOMServer.renderToStaticMarkup(element);
        const text = htmlToText(htmlString, {
            wordwrap: false,
            selectors: [
                { selector: 'a', options: { ignoreHref: true } },
                { selector: 'img', format: 'skip' },
            ],
            formatters: {
                heading: function (elem, walk, builder, formatOptions) {
                    builder.openBlock();
                    walk(elem.children, builder);
                    builder.closeBlock();
                },
            },
            tags: { h1: 'heading', h2: 'heading', h3: 'heading', h4: 'heading', h5: 'heading', h6: 'heading' },
        }).trim();
        return text;
    } catch (error) {
        console.error('Error rendering component:', error);
        return '';
    }
}

(async () => {
    try {
        const learningModuleDirs = getLearningModuleDirs(rootDir);
        let pages = [];

        for (const moduleDir of learningModuleDirs) {
            const pageFiles = getTSXFiles(moduleDir);

            for (const pageFile of pageFiles) {
                const pageId = path.relative(rootDir, pageFile);

                let PageComponent;
                try {
                    PageComponent = require(pageFile.startsWith('.')
                        ? pageFile
                        : './' + path.relative(__dirname, pageFile).replace(/\\/g, '/')
                    ).default;

                    if (!PageComponent) {
                        console.warn(`No default export found in ${pageFile}`);
                        continue;
                    }
                } catch (error) {
                    // console.error(`Failed to import ${pageFile}:`, error);
                    continue;
                }
                pages.push({ pageId, PageComponent });
            }
        }

        const searchIndex = [];

        for (const { pageId, PageComponent } of pages) {
            const props = {
                courseId: 0,
                attemptId: 0,
                next: () => { },
                prev: () => { },
                goToPage: () => { },
                handleFinish: () => { },
                setIsComplete: () => { },
            };

            const textContent = extractTextFromComponent(PageComponent, props);

            searchIndex.push({
                pageId,
                text: textContent,
            });
        }

        const outputPath = path.join(__dirname, '..', 'src', 'data', 'searchIndex.json');
        fs.writeFileSync(outputPath, JSON.stringify(searchIndex, null, 2));

        console.log(`Search index generated with ${searchIndex.length} entries.`);
    } catch (error) {
        console.error('An error occurred during search index generation:', error);
    }
})();
