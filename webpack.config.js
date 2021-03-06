const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        './src/index.js',
        'webpack-hot-middleware/client'
    ],
    output: {
        path: path.join(__dirname, '/www/dist'),
        publicPath: 'http://erp-ti.gisce.lan:8080/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'css-loader'
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            }
        ],
    },
    devtool: "source-map",
    devServer: {
        historyApiFallback: true,
        contentBase: 'www',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};