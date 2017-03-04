const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        './src/index.js',
        'webpack-hot-middleware/client'
    ],
    output: {
        path: path.join(__dirname, '/www/dist'),
        publicPath: 'http://localhost:8080/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ],
    },
    devServer: {
        historyApiFallback: true,
        contentBase: 'www',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};