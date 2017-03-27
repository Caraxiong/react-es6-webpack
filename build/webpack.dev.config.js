var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(__dirname, '../src/components/main.js');
var BUILD_PATH = path.resolve(__dirname, './dist');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        APP_PATH
    ],  
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    // resolve: {
    //   extensions: ['', '.js', '.jsx'],
    //   alias: {
    //     'styles': __dirname + '/src/styles',
    //     'mixins': __dirname + '/src/mixins',
    //     'components': __dirname + '/src/components/'
    //   }
    // },
    module: {
    // preLoaders: [{
    //   test: /\.(js|jsx)$/,
    //   exclude: /node_modules/,
    //   loader: 'eslint-loader'
    // }],
      loaders: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'react-hot-loader!babel-loader'// transpiling compiling
      }, {
        test: /\.scss/,
        loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version", "firefox 15"]}!sass-loader?outputStyle=expanded'
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version", "firefox 15"]}'
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }, {
        test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=8192'
      }]
  }
}