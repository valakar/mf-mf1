const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
    path.join(__dirname, 'tsconfig.json'),
    [/* mapped paths to share */]);

module.exports = {
    output: {
        uniqueName: 'mf1',
        publicPath: 'auto',
    },
    optimization: {
        runtimeChunk: false,
    },
    resolve: {
        alias: {
            ...sharedMappings.getAliases(),
        },
    },
    experiments: {
        outputModule: true,
    },
    plugins: [
        new ModuleFederationPlugin({
            library: { type: 'module' },

            // For remotes (please adjust)
            name: 'mf1',
            filename: 'remoteEntry.js',
            exposes: {
                './MF1Module': './src/app/pages/root/root.module.ts',
                './MF2Module': './src/app/pages/home/home.module.ts'
            },

            // For hosts (please adjust)
            // remotes: {
            //     "mfe1": "http://localhost:3000/remoteEntry.js",

            // },

            shared: share({
                '@angular/core': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
                '@angular/common': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
                '@angular/common/http': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
                '@angular/router': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
                'useless-lib': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
                // '@angular/material': { singleton: true, strictVersion: true, requiredVersion: '13.3.1' },
                // "@angular/material/snack-bar": { singleton: true, strictVersion: true },
                ...sharedMappings.getDescriptors(),
            }),

        }),
        sharedMappings.getPlugin(),
    ],
};
