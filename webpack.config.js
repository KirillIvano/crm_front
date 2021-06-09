const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanObsoleteChunks = require('webpack-clean-obsolete-chunks');


module.exports = {
    entry: './src/index.tsx',
    resolve: {
        extensions: ['.ts', '.js', '.tsx'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            vars: path.resolve(__dirname, 'src', 'vars')
        },
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
    },
    plugins: [
        new CleanObsoleteChunks(),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            minify: false,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [['@babel/preset-react', {"runtime": "automatic"}]],
                        }
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: path.resolve(__dirname, 'tsconfig.json'),
                            transpileOnly: true
                        },
                    },
                ],
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    esModule: true,
                },
            },
        ],
    },

};
