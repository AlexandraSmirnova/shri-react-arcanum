const path = require('path');
const webpack = require('webpack');

const distPath = path.join(__dirname,  'build/client');

const DEBUG = process.env.NODE_ENV !== 'production';

let config = {
    mode: DEBUG ? 'development': 'production',
    entry:  './src/client/index.js',
    target: 'node',
    output:  {
        path: distPath,
        filename: 'index.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss'],
        modules: [path.resolve('node_modules'), path.resolve(__dirname, 'src')]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['@babel/env', '@babel/react'],
                    plugins: [
                        ["@babel/plugin-proposal-class-properties", { "loose": true }]
                    ]
                }
            },
            {
                test: /\.svg$/,
                loader: 'svg-react-loader'
            },
            {
                test: /\.(jpg|png)$/,
                use:[{
                    loader: "url-loader",
                    options:{
                      limit:4096,
                      name: "[path][name].[ext]",
                      fallback: "file-loader"
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
        ],
    },
};

if (DEBUG) {
    config = Object.assign({}, config, {
        devtool: 'cheap-module-source-map'
    });
}

module.exports = config;