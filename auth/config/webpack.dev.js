const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8082/'
    },
    devServer: {
        port: 8082,
        historyApiFallback: {
            index: '/',
            disableDotRule: true
        }
    },
    devtool: 'eval-cheap-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ]
};

module.exports = merge(commonConfig, devConfig);

