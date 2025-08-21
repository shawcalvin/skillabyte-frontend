const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const askQuestion = (query) => {
    return new Promise((resolve) => rl.question(query, resolve));
};

(async () => {
    const folderTitle = await askQuestion('Enter the title for the folder: ');
    const baseDir = path.join(__dirname, 'src', 'courses', folderTitle);
    const learningModuleDir = path.join(baseDir, 'learning-module');
    fs.mkdirSync(baseDir, { recursive: true });
    fs.mkdirSync(learningModuleDir, { recursive: true });

    const numPages = parseInt(await askQuestion('How many pages to add to the learning-module subfolder? '), 10);
    const pages = [];

    for (let i = 1; i <= numPages; i++) {
        const filename = await askQuestion(`Enter the filename for page ${i}: `);
        const pageTitle = await askQuestion(`Enter the title for page ${i}: `);

        const pageFilename = `${i}-${filename}.tsx`;
        const pageFilePath = path.join(learningModuleDir, pageFilename);

        const pageContent = `
"use client"

import { LearningModulePageProps } from "@/lib/types/modules";
import { ModuleContainer } from "@/components/interactive/modules";
import { Text } from "@/components/ui/text";

export default function ModulePage(props: LearningModulePageProps) {
    return (
        <>
            <ModuleContainer title={"${pageTitle}"} {...props}>
                <Text>Start building module content here</Text>
            </ModuleContainer>
        </>
    );
}
        `;

        fs.writeFileSync(pageFilePath, pageContent.trim());
        pages.push({ pageFilename, pageTitle });
    }

    const moduleBuilderContent = `
"use client"

import { LearningModulePage } from '@/lib/types/modules';
${pages
            .map((page, index) => `import Page${index + 1} from './learning-module/${page.pageFilename.replace('.tsx', '')}';`)
            .join('\n')}

export default function moduleBuilder() {
    const pages: LearningModulePage[] = [
        ${pages.map((_, index) => `(props) => <Page${index + 1} {...props} />`).join(',\n        ')}
    ];

    return { pages: pages };
}
    `;
    const moduleBuilderPath = path.join(baseDir, 'module-builder.tsx');
    fs.writeFileSync(moduleBuilderPath, moduleBuilderContent.trim());

    console.log(`Created folder and files in ${baseDir}`);
    rl.close();
})();
