const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const env = {
    NODE_ENV: 'development'
}

const app = express();
const config = require('../webpack.config')(env);
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