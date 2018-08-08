const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const public = path.join(__dirname, 'public')
const dist = path.join(public, 'dist')
module.exports = (env) => {
    const isProduction = env === 'production'
    const CSSExtract = new ExtractTextPlugin('styles.css')

    return {
        entry: './src/app.js',
        output: {
            path: dist,
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
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            },
                        }
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract,
        ],
        devServer: {
            contentBase: public,
            publicPath: '/dist/',
            historyApiFallback: true,
        },
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        mode: 'development',
    }
}