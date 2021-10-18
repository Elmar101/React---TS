const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm

module.exports = {
    plugins: [ new HtmlWebpackPlugin (
        { 
            template: './src/index.html' ,
            filename: 'index.html'
        }
    ) ],
  };