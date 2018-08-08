const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const public = path.join(__dirname, 'public/')
module.exports = (env) => {
    const isProduction = env === 'production'
    const CSSExtract = new ExtractTextPlugin('styles.css')

    return {
        entry: './src/app.js',
        output: {
            path: public,
            filename: 'bundle.js',
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/,
            }, {
                test: /\.s?css/,
                use: CSSExtract.extract({
                    use: [
                        'css-loader',
                        'sass-loader',
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract,
        ],
        devServer: {
            contentBase: public,
            historyApiFallback: true,
        },
        devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        mode: 'development',
    }
}