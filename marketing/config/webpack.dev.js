const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PackageJson = require('../package.json');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: '/',
            disableDotRule: true
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingApp': './src/bootstrap'
            },
            /**
             * Here we define the shared modules to use.
             */
            shared: PackageJson.dependencies,
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ]
};

module.exports = merge(commonConfig, devConfig);

