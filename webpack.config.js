const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
        error: './src/error.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },
            {
                test: /\.(png|gid|jpg|jpeg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',
                        limit: 500,
                        fallback: require.resolve('file-loader'),
                    }
                }]
            },
            {
                test: /\.(js|jsx)$/,
                // test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            }
        ]
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist/")
        },
        port: 8999
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'cyberpunk20777',
            // template: './src/index.html'
        }),
        new MiniCssExtractPlugin(),
        new FriendlyErrorsWebpackPlugin({
            compilationSuccessInfo: {
                notes: ['系統運行 http://localhost:' + this.devServer]
            },
            clearConsole: true
        }),
        new webpack.BannerPlugin({
            banner: ' banner資訊 banner資訊 banner資訊 '
        })
        
    ],
}