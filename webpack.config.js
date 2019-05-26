const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const mainConfig = {
  target: "electron-main",
  node: {
    __dirname: false,
    __filename: false
  },
  entry: {
    main: "./src/main/main.ts"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loaders: "ts-loader"
      }
    ]
  },
  devtool: "source-map",
  watchOptions: {
    poll: true
  }
};

const rendererConfig = {
  target: "electron-renderer",
  entry: {
    index: "./src/renderer/index.tsx"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loaders: "ts-loader"
      }
    ]
  },
  devtool: "source-map",
  watchOptions: {
    poll: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};

module.exports = [mainConfig, rendererConfig];
