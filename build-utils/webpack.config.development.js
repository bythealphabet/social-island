const path = require("path");
const webpack = require("webpack");
const CURRENT_WORKING_DIR = process.cwd();

function webpackDevelopment(name) {
  return {
    name,
    devtool: "eval-source-map",
    entry: [
      `webpack-hot-middleware/client?name=${name}`,
      path.join(CURRENT_WORKING_DIR, "client/main.js"),
    ],
    output: {
      path: path.join(CURRENT_WORKING_DIR, "/dist"),
      filename: "bundle.js",
      publicPath: "/dist/",
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
  };
}

module.exports = webpackDevelopment;
