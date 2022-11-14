const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env) => ({
  entry: "./src/index.js",
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "./src/images", to: "images" }],
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "./public/index.html"),
    }),
  ],
  output: {
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", { targets: "defaults" }],
          },
        },
      },
    ],
  },
});
