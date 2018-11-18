const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./common.config.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  output: {
    filename: 'bundle.development.js',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
