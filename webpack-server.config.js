const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const DEBUG = process.env.NODE_ENV !== 'production';

const SRC_PATH = path.resolve(__dirname, 'src');
const BUILD_PATH = path.resolve(__dirname, 'build');
const PUBLIC_PATH = path.resolve(SRC_PATH, 'public');
const SERVER_PATH = path.resolve(BUILD_PATH,  'server');

console.log('DEBUG', DEBUG);
let config = {
    mode: DEBUG ? 'development': 'production',
    entry:  path.resolve(SRC_PATH, 'server/index.js'),
    target: 'node',
    context: SRC_PATH,
    output:  {
        path: SERVER_PATH,
        filename: 'index.js',
    },
    resolve: {
        extensions: ['.js'],
        modules: [path.resolve('node_modules'), SRC_PATH]
    },
    plugins: [
        new CopyPlugin([{
            from: PUBLIC_PATH, to: path.join(BUILD_PATH, 'public')
        }]),
    ],
    node: {
        __dirname: false
    }
};

if (DEBUG) {
    config = Object.assign({}, config, {
        devtool: 'cheap-module-source-map'
    });
}

module.exports = config;