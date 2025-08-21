import path from 'path';
import webpack from 'webpack';

interface WebpackConfigOptions {
    entry: string;
    outputPath: string;
    outputFilename: string;
}

const webpackConfig = (options: WebpackConfigOptions): webpack.Configuration => ({
    mode: 'production',
    entry: options.entry,
    output: {
        path: options.outputPath,
        filename: options.outputFilename,
        library: 'LearningModules',
        libraryTarget: 'umd'

    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                    },
                },
            },
        ],
    },
});

export default webpackConfig;