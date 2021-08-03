const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".js", ".tsx", ".ts"],
    // alias: {
    //   src: path.resolve(__dirname, "./src"),
    // },
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "build.js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ["ts-loader"],
        exclude: [path.resolve(__dirname, "./src/api/")],
      },
      {
        test: /\.(css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        exclude: [path.resolve(__dirname, "./src/api/")],
      },
      {
        test: /\.(png|jpg)$/,
        use: ["file-loader"],
        exclude: [path.resolve(__dirname, "./src/api/")],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new MiniCssExtractPlugin({ filename: "style.css" }),
  ],
  devServer: {
    historyApiFallback: {
      index: "/",
    },
  },
  stats: {
    errorDetails: true,
  },
};
