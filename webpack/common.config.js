const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const GAME_ROOT = 'root';
const resolve = location => path.resolve(__dirname, location);

module.exports = {
  target: 'web',

  entry: {
    index: resolve('../src/index.js'),
  },

  output: {
    path: resolve('../build'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.(js?)$/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
      },
    ],
  },

  resolve: {
    modules: [resolve('../node_modules')],
    extensions: ['.js'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('../src/template.html'),
      minify: {
        collapseWhitespace: true,
      },
    }),
    new webpack.DefinePlugin({
      GAME_ROOT,
    }),
  ],
};
