var path = require('path')
var webpack = require('webpack')
var VueLoaderPlugin = require('vue-loader/lib/plugin')
var HtmlWebPackPlugin = require('html-webpack-plugin')
var webpackBar = require('webpackbar')

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.html$/,
        use: [
            {
                loader: 'html-loader',
                options: {minimize: true}
            }
        ]
      }
    ]
  },
  resolve: {
    // alias: {
      // 'vue$': 'vue/dist/vue.esm.js'
    // }
    extensions: ['.js','.vue']
  },
  plugins: [
      new VueLoaderPlugin(),
      new HtmlWebPackPlugin({
        template: './index.html',
        filename: './index.html'
      }),
      new webpackBar()
  ]
}