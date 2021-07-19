const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
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
        use: ["ts-loader"],
      },
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  //   devServer: {
  //     port: 3000,
  //     historyApiFallback: {
  //       index: "/",
  //     },
  //   },
};
