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
            },
            /**
             * Here we define the shared modules to use.
             */
            shared: PackageJson.dependencies,
        }),
    ]
};

module.exports = merge(commonConfig, devConfig);

