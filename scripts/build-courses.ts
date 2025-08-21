import path from 'path';
import fs from 'fs';
import webpack from 'webpack';
import webpackConfig from './webpack.config';

const coursesDir = path.resolve(__dirname, 'src', 'courses');
const outputDir = path.resolve(__dirname, 'dist', 'courses');

function buildCourse(courseName: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const entryFile = path.join(coursesDir, courseName, 'module-builder.tsx');
        const outputPath = path.join(outputDir, courseName);

        if (!fs.existsSync(entryFile)) {
            reject(`Entry file not found for course ${courseName}: ${entryFile}`);
            return;
        }

        const config = webpackConfig({
            entry: entryFile,
            outputPath,
            outputFilename: 'bundle.js',
        });
        fs.mkdirSync(outputPath, { recursive: true });

        webpack(config, (err, stats) => {
            if (err || stats?.hasErrors()) {
                const errorDetails = err || stats?.toJson().errors;
                console.error(`Error building course ${courseName}:`, errorDetails);
                reject(errorDetails);
            } else {
                console.log(`Successfully built course ${courseName}`);
                resolve();
            }
        });
    });
}

async function buildAllCourses() {
    try {
        const files = fs.readdirSync(coursesDir);
        const courseDirs = files.filter((file) =>
            fs.statSync(path.join(coursesDir, file)).isDirectory()
        );

        for (const courseName of courseDirs) {
            try {
                await buildCourse(courseName);
            } catch (error) {
                console.error(`Failed to build course ${courseName}:`, error);
            }
        }
    } catch (err) {
        console.error('Error reading courses directory:', err);
    }
}

buildAllCourses();