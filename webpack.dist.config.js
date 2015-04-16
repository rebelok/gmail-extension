/*
 * Webpack distribution configuration
 *
 * This file is set up for serving the distribution version. It will be compiled to dist/ by default
 */

'use strict';

var webpack = require('webpack');
var scriptDir = './src/scripts/';

module.exports = {

  output: {
    publicPath: '/assets/',
    path: 'dist/assets/',
    filename: 'main.js'
  },

  debug: true,
  devtool: true,
  entry: './src/scripts/components/ChromeApp.js',

  stats: {
    colors: true,
    reasons: false
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ],

  resolve: {
    extensions: ['', '.js'],
    alias: {
      'styles': '../../../src/styles',
      'components': '../../../src/scripts/components/'
    }
  },

  module: {
      noParse: [scriptDir + 'gmail.js',scriptDir + 'jquery.js','./node_modules/*'],
      preLoaders: [{
      test: /\.js$/,
          exclude: /[node_modules,jquery\.js,gmail\.js]/,
      loader: 'jsxhint'
    }],

    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'jsx-loader?harmony'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.scss/,
      loader: 'style-loader!css-loader!sass-loader?outputStyle=isExpanded'
    }, {
      test: /\.(png)$/,
      loader: 'url-loader?limit=100000&mimetype=image/png'
    }]
  }
};
