var path = require('path')
var webpack = require('webpack')

module.exports = {

  devtool: 'cheap-module-eval-source-map',

  entry: [
    'webpack-hot-middleware/client',
    './src/js/index'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [{
      test: /\.js?$/,
      loader: 'babel',
      include: __dirname
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }],
    resolve: {
      extensions: ['', '.js', '.css']
    }
  }

}
