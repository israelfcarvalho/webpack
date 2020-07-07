const path = require("path");
const HtmlWebpackplugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const environmentPlugins = require("./config/webpack/plugins");

const plugins = [
    new CleanWebpackPlugin(),
    new HtmlWebpackplugin({
      title: "Caching",
      template: "./src/index.html",
    }),
  ];

module.exports = (env) => {
  const environment = process.env.NODE_ENV;
  const devtool = environment === 'production' ? "source-map" : "";
  const appEntry = './src/index.tsx';
  const app = [];

  if (environment !== 'production') {
    app.push("react-hot-loader/patch");
    app.push("webpack-hot-middleware/client");
  }
  
  const hashName = environment === 'production' ? "contenthash" : "hash";
  app.push(appEntry);

  return {
    entry: {
      app,
    },
    devtool,
    mode: environment,
    plugins: plugins.concat(environmentPlugins[environment]),
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
        "react-dom": environment === 'production' ? "react-dom" : "@hot-loader/react-dom",
      },
    },
    output: {
      filename: `[name].[${hashName}].js`,
      chunkFilename: `[name].[${hashName}].js`,
      path: path.resolve(__dirname, "dist"),
      publicPath: "./",
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
    }
  };
};
