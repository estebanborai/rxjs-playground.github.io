const webpack = require('webpack');

var path = require('path');

module.exports = {
  entry: {
    app: './src/index.js',
    vendor : ['rxjs']
  },
  devtool : '#source-map',
  output: {
    path: path.join(__dirname,'dist'),
    filename: '[name].js',
    publicPath : 'http://localhost:8080/assets'
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['babel-loader']
    },{
      test: /\.s?css$/,
      loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
    },{
      loader: 'json-loader',
      test: /\.json$/
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {}
        }
      ]
    } ]
  },
  node: {
    fs: 'empty',
    module: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  externals: {
    codemirror: 'CodeMirror'
  },
  devServer : {
    contentBase  : path.resolve(__dirname, 'src'),
  }
};
