const { resolve } = require('path');
const path = require('path');
const webpack = require('webpack');

// module.exports = {
//   entry: './App/App.js',
//   output: {
//     filename: 'bundle.js',
//     path:resolve(__dirname, 'static')
//   }
// }

module.exports = {
  // context: resolve(__dirname, 'App'),

  entry: [
    // 'react-hot-loader/patch',
    // activate HMR for React

    // 'webpack-dev-server/client?http://localhost:8001',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    // 'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    './App/Index.js'
    // the entry point of our app
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  // plugins: [
  //   new webpack.HotModuleReplacementPlugin()
  // ],
  // resolve: {
  //   extensions: ['', '.js', '.jsx']
  // },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src'),
      exclude: /node_modules/
    }]
  }
};