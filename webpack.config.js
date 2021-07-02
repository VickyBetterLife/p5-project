const copyPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    devServer: {
        host: "localhost",
        port: 9000,
        hot: true,
        contentBase:'dist'
    },
    plugins: [
        // new copyPlugin([
        //     { from: './src/index.html', to: './' }
        // ])
        // new HtmlWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from:'./src/index.html',
                    to:'./'
                }
            ]
        }
        )
    ]
}