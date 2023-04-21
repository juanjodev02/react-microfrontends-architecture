const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const PackageJson = require("../package.json");
module.exports ={
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react','@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
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
    ]
}