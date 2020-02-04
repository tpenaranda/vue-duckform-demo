const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  configureWebpack: {
    entry: './src/main.js',
    plugins: [
      new HtmlWebpackPlugin({
        title: process.env.VUE_APP_TITLE,
        template: './src/index.html'
      })
    ]
  }
}
