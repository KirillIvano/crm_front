const {merge} = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const AntScss = require('antd-scss-theme-plugin');

const common = require('./webpack.config');

const dev = {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        hotOnly: true,
        contentBase: path.resolve(__dirname, 'dist'),
        port: '8080',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization, Cache-Control',
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            __SERVER_ORIGIN__: '"https://golangcrm.herokuapp.com"',
        }),
        new AntScss(),
    ],
    module: {
        rules: [
            {
                test: /\.(sc|c)ss$/,
                exclude: /(flexboxgrid|antd)/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    }, {
                        loader: 'sass-loader',
                    }
                ],
            }, {
                test: /\.(le|c|sc)ss$/,
                include: /(flexboxgrid|antd)/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            }, {
                test: /\.(png|svg|jpg|ico|ttf|woff)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        esModule: false
                    }
                }
            },
        ],
    },
};

module.exports = merge(common, dev);
