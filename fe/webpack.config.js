    var path = require('path');
    var webpack = require('webpack');
    module.exports = {
        devtool: 'cheap-module-eval-source-map',
        entry: ['./es6/index.js'],
        output: {
            path: __dirname,
            filename: 'bundle.js'
        },
        module: {
            loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }]
        }
    };