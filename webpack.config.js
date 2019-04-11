const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin') //该插件用于引入 .vue 文件

module.exports = {
  entry: path.join(__dirname, './src/main.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  devServer: {
    open: true, 
    port: 3000,
    contentBase: "src",
    hot: true
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html'
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      { test: /\.js$/, use: "babel-loader", exclude: /node_modules/},
      { test: /\.css$/, use: ["style-loader", "css-loader"]},
      { test: /\.ttf|eot|svg|woff|woff2$/, use: 'url-loader'},
      { test: /\.vue$/, use: "vue-loader"}
    ]
  },
  resolve: {
    alias:{
       "vue$": "vue/dist/vue.js"  //配置引入文件位置的一种方法
    }
  }
}