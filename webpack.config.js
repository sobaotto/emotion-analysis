const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  //   mode: "development",
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".js", ".tsx", ".ts"],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "build.js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /functions/,
        use: ["ts-loader"],
      },
      {
        test: /\.(css)$/,
        exclude: /functions/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpg)$/,
        exclude: /functions/,
        use: ["file-loader"],
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
};
