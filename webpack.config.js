const path = require('path')

const public = path.join(__dirname, 'public/')
module.exports = {
    entry: './src/app.js',
    output: {
        path: public,
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node-modules/,
        }, {
            test: /\.s?css/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devServer: {
        contentBase: public
    },
    devtool: 'cheap-module-eval-source-map',
    mode: 'development',
}
