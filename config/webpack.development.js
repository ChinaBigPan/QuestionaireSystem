/*
 * File Created: Friday, 17th August 2018 4:28:04 pm
 * Author: Daguo (gxp5189468@163.com)
 * webpack开发模式的配置
 */
// copy-webpack-plugin
// html-minify
// extract-css @next
// file-loader url-loader

module.exports = {
  modules: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader',
        query: {
          name: '[hash].[ext]',
          // '[path][name].[ext]?[hash]' 
          limit: 10000
        }
      },
      {
        test: /\.(eot|ttf|wav|mp3)$/,
        loader: 'file-loader',
        query: {
          name: '[hash].[ext]',
          // '[path][name].[ext]?[hash]'  
        }
      }
    ]
  }
}