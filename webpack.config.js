/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpack-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */
"use strict";
var webpack = require('webpack');

module.exports = {

  output: {
    filename: '[name].js',
    publicPath: '/assets/'
  },

  cache: true,
  debug: true,
  devtool: 'sourcemap',
  entry: {
    videoPlayerApp: [
        'webpack/hot/only-dev-server',
        './src/javascripts/videoPlayerApp'
    ],
    vendors: [
      'react',
      'spin',
      'fetch-polyfill',
      'fastclick'
    ]
  },

  stats: {
    colors: true,
    reasons: true
  },

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
      loader: 'react-hot!babel-loader'
    }, {
      test: /\.scss/,
      loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(png|jpg|eot|woff|woff2|ttf|svg)$/,
      loader: 'url-loader?limit=8192'
    }]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ]

};
