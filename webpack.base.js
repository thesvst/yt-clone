const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    target: 'web',
    entry: {
        build: './src/index.tsx',
    },
    output: {
        path: path.resolve(__dirname, 'distribution'),
        filename: '[name].[contenthash].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/public/index.html',
        }),
    ],
    resolve: {
        modules: [
            './node_modules',
            './src',
        ],
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            "@ui": path.resolve('./src/@ui'),
            "common": path.resolve('./src/common'),
            "containers": path.resolve('./src/common'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.(scss)$/,
                include: path.resolve(__dirname, './src'),
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]_[hash:base64:5]',
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },
};
