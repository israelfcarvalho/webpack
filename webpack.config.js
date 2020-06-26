const path = require('path');

const devtool = process.env.NODE_ENV === 'production' ? 'source-map' : 'eval-source-map'

module.exports = {
    entry: './src/index.ts',
    devtool,
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            {
                test: /.s[ac]ss$/i,
                use : [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}