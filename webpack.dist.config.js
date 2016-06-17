/*
 * Webpack distribution configuration
 *
 * This file is set up for serving the distribution version. It will be compiled to dist/ by default
 */

'use strict';

var webpack = require('webpack');

module.exports = {

  output: {
    publicPath: '/assets/',
    path: 'dist/assets/',
    filename: '[name].js'
  },

  debug: false,
  devtool: false,
  entry: {
    videoPlayerApp: __dirname + '/src/javascripts/videoPlayerApp',
    vendors: [
      'react',
      'spin',
      'fetch-polyfill',
      'fastclick'
    ]
  },

  stats: {
    colors: true,
    reasons: false
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.NoErrorsPlugin()
  ],

  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
    alias: {
      'stylesheets': __dirname + '/src/stylesheets',
      'mixins': __dirname + '/src/mixins',
      'components': __dirname + '/src/javascripts/components/',
      'vendors': __dirname + '/src/vendors/'
    }
  },

  module: {
    preLoaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }],
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
    }, {
      test: /\.(png|jpg|eot|woff|woff2|ttf|svg)$/,
      loader: 'url-loader?limit=8192'
    }]
  }
};
