const express = require('express');
const webpack = require('webpack');
const path = require('path');

const app = express();
const DIST_DIR = path.resolve(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

const config = require('../config/webpack/webpack.prod');
const compiler = webpack(config);

compiler.run();

app.use(express.static(DIST_DIR));
app.get('*', (req, res) => {
    res.sendFile(HTML_FILE);
})

const PORT = process.env.PORT || 8080;

app.listen(
    8080, function(){
        console.log(`Webpack training production build, running on port ${PORT}!!`);
        console.log('Press crtl+c to quit!!');
    }
)