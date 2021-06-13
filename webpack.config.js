const CopyPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

const webpackConfig = {
    mode: 'development',
    entry: [__dirname + '/src/index.ts', __dirname + '/src/style.scss'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    target: 'es5',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3300,
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputhPath: 'dist/',
                            name: 'style.css',
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/assets',
                    to: 'assets',
                },
            ],
        }),
        new ESLintPlugin({
            extensions: ['.ts', '.js'],
            exclude: 'node_modules',
        }),
        new ForkTsCheckerWebpackPlugin({
            eslint: {
                files: './src/*.ts',
            },
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    resolve: {
        extensions: ['.ts', '.js'],
    },
};

module.exports = webpackConfig;
