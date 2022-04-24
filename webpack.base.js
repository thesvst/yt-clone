const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotenvWebpack = require('dotenv-webpack');
const dotenv = require('dotenv');

const envPath = path.resolve(__dirname, '.env');
dotenv.config({
  path: envPath,
});

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
    new DotenvWebpack({ path: envPath }),
  ],
  resolve: {
    modules: [
      './node_modules',
      './src',
    ],
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@ui': path.resolve('./src/@ui'),
      common: path.resolve('./src/common'),
      containers: path.resolve('./src/containers'),
      hooks: path.resolve('./src/hooks'),
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
      {
        test: /\.(png|jpg|gif|jpeg|ico)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
