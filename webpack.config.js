const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js", // using [name] will create files name in entry object. ex: bundle
    // contentHash will create a hash code:- It will create a hashcode new every time whenever we reun npm run build
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Starter",
      filename: "index.html",
      template: "src/template.html",
    }),
  ],
};

// Webpack Install
// webpack config file
// loaders and sass compiling
// html webpack plugin
// html template
// contentHash (Hashing)
// webpack dev server
// asset/resource in modules { rules }
// axios in generateJoke