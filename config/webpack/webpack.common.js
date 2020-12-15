const path = require("path");
const HtmlWebpackplugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = (env) => {
  console.log("Webpack environment: ", env.NODE_ENV || process.env.NODE_ENV);

  return webpack({
    entry: {
      app: ["./src/index.tsx"],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackplugin({
        title: "Production",
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
          use: "file-loader",
        },
        {
          test: /\.html$/,
          use: "html-loader",
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    output: {
      filename: "[name].js",
      chunkFilename: "[name].js",
      path: path.resolve(__dirname, "../../dist", ""),
    },
    optimization: {
      runtimeChunk: "single",
      moduleIds: "hashed",
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      },
    },
  }).options;
};
