const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: '/',
            disableDotRule: true
        }
    },
    output: {
        publicPath: 'http://localhost:8081/'
    },
    devtool: 'eval-cheap-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ]
};

module.exports = merge(commonConfig, devConfig);

