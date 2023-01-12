const path = require('path')
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            loader: 'style-loader',
            test: /\.s?css$/
        }, {
            loader: 'css-loader',
            test: /\.s?css$/
        }, {
            loader: 'sass-loader',
            test: /\.s?css$/
        }]
    },
    devServer: {
        static: path.join(__dirname, 'public'),
        historyApiFallback: true
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser',
        })
    ],
    resolve: {
        alias: {
            process: "process/browser"
        }
    }
}
