const path = require("path");
const HtmlWebpackplugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

const isProduction = process.env.NODE_ENV === "production";
const devtool = isProduction ? "source-map" : "eval-source-map";

module.exports = {
  entry: {
    app: [
      "react-hot-loader/patch",
      "webpack-hot-middleware/client",
      "./src/index.tsx",
    ],
  },
  devtool,
  mode: process.env.NODE_ENV,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackplugin({
      title: "Output Management",
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /.s[a|c]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            babelrc: true,
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: "file-loader",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "react-dom": isProduction ? "react-dom" : "@hot-loader/react-dom",
    },
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
};
