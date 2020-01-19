const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: './src/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  mode: 'development',
  devServer: {
    contentBase: './dist',
    // hot: true
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.less/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            hmr: process.env.NODE_ENV === 'development',
          },
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'demo',
    template: './src/index.html'
  }), new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: '[name].css',
    chunkFilename: '[id].css' 
  }),
  // new webpack.HotModuleReplacementPlugin()
  ]
}