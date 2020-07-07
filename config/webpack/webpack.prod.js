const {merge} = require("webpack-merge");
const common = require("./webpack.common.js")({
  NODE_ENV: process.env.NODE_ENV,
});

module.exports = merge(common, {
  devtool: "source-map",
  mode: "production",
});
