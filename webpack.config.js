/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpack-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
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
  entry: [
      './src/scripts/components/ChromeApp.js'
  ],

    stats: {
        colors: true,
        reasons: true
    },

  resolve: {
    extensions: ['', '.js'],
    alias: {
      'styles': '../../../src/styles',
      'components': '../../../src/scripts/components/'
    }
  },
  module: {
      noParse: [scriptDir + 'gmail.js',scriptDir + 'jquery.js','./node_modules/*','.scss'],
    //preLoaders: [{
    //  test: /\.js$/,
    //  exclude: /[node_modules,jquery\.js,gmail\.js]/,
    //  loader: 'jsxhint'
    //}],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'react-hot!jsx-loader?harmony'
    },  {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(png)$/,
        loader: 'url-loader?limit=100000&mimetype=image/png'
    }]
  },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]



};
