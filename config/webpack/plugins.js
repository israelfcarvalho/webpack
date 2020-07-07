const webpack = require("webpack");

module.exports =  {
    development : [
        new webpack.HotModuleReplacementPlugin(),
    ],
    production: []
}