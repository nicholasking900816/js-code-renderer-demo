const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    devtool: false,
    mode: 'development',
    plugins: [new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src/index.html')
    })]
}