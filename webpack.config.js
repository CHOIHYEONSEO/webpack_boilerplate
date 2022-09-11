const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    //여러 entry
    main: "./views/src/main.js",
    map: "./views/src/map.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./views/dist"),
  },
  module: {
    rules: [
      {
        //.mjs or .js file
        test: /\.m?js$/,
        //제외 file
        exclude: /(node_modules|bower_components)/,
        use: {
          rules: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { sourceMap: true } },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },
    ],
  },
  plugins: [new webpack.ProgressPlugin()],
  devtool: "eval-source-map",
};
