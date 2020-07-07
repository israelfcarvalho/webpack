const {merge} = require("webpack-merge");
const webpack = require("webpack");
const common = require("./webpack.common")({
    NODE_ENV: process.env.NODE_ENV
});

module.exports = merge(common, {
    entry: {
        app: ["react-hot-loader/patch", "webpack-hot-middleware/client"]
    },
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        alias: {
            "react-dom": "@hot-loader/react-dom"
        }
    }
})
