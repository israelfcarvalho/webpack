const path = require('path');

const devtool = process.env.NODE_ENV === 'production' ? 'source-map' : 'eval-source-map'

module.exports = {
    entry: {
        app: './src/index.tsx'
    },
    devtool,
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            {
                test: /.s[a|c]ss$/i,
                use : [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc:true
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: 'file-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use:['file-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}