const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const PackageJson = require('../package.json');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: '/',
            disableDotRule: true
        }
    },
    output: {
        publicPath: 'http://localhost:8080/'
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            /**
             * Here we define the remotes to use.
             */
            remotes: {
                /**
                 * The key 'marketing' is the name of the remote.
                 */
                marketing: 'marketing@http://localhost:8081/remoteEntry.js',

                /**
                 * The key 'auth' is the name of the remote.
                 */
                auth: 'auth@http://localhost:8082/remoteEntry.js',

                /**
                 * The key 'dashboard' is the name of the remote.
                 */
                dashboard: 'dashboard@http://localhost:8083/remoteEntry.js',
            },
            /**
             * Here we define the shared modules to use.
             */
            shared: PackageJson.dependencies,
        }),
    ]
};

module.exports = merge(commonConfig, devConfig);

