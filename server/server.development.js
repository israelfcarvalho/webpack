const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const config = require('../config/webpack/webpack.dev');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
}));

app.use(webpackHotMiddleware(compiler))

app.listen(
    3000, 
    function() {
        console.log('Webpack training development build running on port 3000!!');
    }
)