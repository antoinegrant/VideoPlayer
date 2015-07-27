"use strict";

var path = require('path');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'test/helpers/pack/**/*.js',
      'test/helpers/mocks/**/*.json',
      'test/helpers/react/**/*.js',
      'test/spec/components/**/*.spec.jsx'
    ],
    preprocessors: {
      'test/helpers/createComponent.js': ['webpack'],
      'test/spec/components/**/*.spec.js': ['webpack'],
      'test/spec/components/**/*.spec.jsx': ['webpack']
    },
    webpack: {
      cache: true,
      module: {
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
        }, {
          test: /\.json$/,
          loader: 'json-loader'
        }]
      },
      resolve: {
        extensions: ['', '.js', '.jsx', '.scss'],
        alias: {
          'stylesheets': path.join(process.cwd(), './src/stylesheets/'),
          'components': path.join(process.cwd(), './src/javascripts/components/'),
          'helpers': path.join(process.cwd(), './test/helpers/'),
          'mocks': path.join(process.cwd(), './test/helpers/mocks/'),
          'vendors': path.join(process.cwd(), './src/vendors/')
        }
      }
    },
    webpackMiddleware: {
      noInfo: true,
      stats: {
        colors: true
      }
    },
    exclude: [],
    port: 8080,
    logLevel: config.LOG_INFO,
    colors: true,
    autoWatch: false,
    browsers: ['PhantomJS'],
    reporters: ['dots'],
    captureTimeout: 60000,
    singleRun: true,
    plugins: [
        require('karma-webpack'),
        require('karma-jasmine'),
        require('karma-phantomjs-launcher')
    ]
  });
};
