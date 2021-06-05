const {merge} = require('webpack-merge');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJs = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminPlugin = require('imagemin-webpack');
const webpack = require('webpack');

const commonConfig = require('./webpack.config');


const prodConfigs = {
    mode: 'production',
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/](react|react-dom)/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        },
        minimizer: [
            new TerserJs(),
            new OptimizeCssAssetsPlugin(),
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({}),
        new webpack.DefinePlugin({}),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /(flexboxgrid|antd)/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: true,
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    'autoprefixer',
                                ],    
                            }
                        },
                    },
                    {
                        loader: 'sass-loader',
                    }
                ],
            }, 
            {
                test: /\.css$/,
                include: /(flexboxgrid|antd)/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|ico|ttf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images/',
                            name: '[name]_[hash].[ext]'
                        }
                    },
                ],
            },
        ],
    },
};


module.exports = merge(commonConfig, prodConfigs);
