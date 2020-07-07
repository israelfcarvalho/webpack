const {merge} = require("webpack-merge");
const common = require("./webpack.common.js")({
  NODE_ENV: process.env.NODE_ENV,
});

const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = merge(common, {
  devtool: "source-map",
  mode: "production",
  plugins: [new WorkboxPlugin.GenerateSW({
    clientsClaim: true,
    skipWaiting: true
  }) ]
});
