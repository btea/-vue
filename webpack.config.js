var path = require('path')
var webpack = require('webpack')
var VueLoaderPlugin = require('vue-loader/lib/plugin')

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
      }
    ]
  },
//   resolve: {
//     alias: {
//       'vue$': 'vue/dist/vue.esm.js'
//     }
//   },
  plugins: [
      new VueLoaderPlugin()
  ]
}