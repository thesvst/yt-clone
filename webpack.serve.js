const webpackMerge = require('webpack-merge');

const base = require('./webpack.base');

const mergedConfig = webpackMerge.merge(base, {
  mode: 'development',
  target: 'web',
  devtool: 'eval-source-map',
  output: {
    publicPath: '/',
  },
  optimization: {
    usedExports: true,
  },
  devServer: {
    hot: true,
    https: true,
    open: true,
    port: 1998,
    historyApiFallback: {
      index: '/',
    },
  },
});

module.exports = mergedConfig;
