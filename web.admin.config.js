const path = require("path");

const webpack = require("webpack");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const HtmlWebpackInjector = require("html-webpack-injector");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const globalConfig = require("./global.config");

const os = require("os");
const ifaces = os.networkInterfaces();

const webCofig = {
  entry: {
    app: "./admin/app/app.js",
    _head: "./admin/app/head.js",
  },
  output: {
    path: path.resolve(__dirname, `./${globalConfig.adminBuildFolder}`),
    filename: "[name].js",
    publicPath: "/",
  },
  devServer: {
    port: `${globalConfig.devPort}`,
    host: ifaces.Ethernet[1].address,
    overlay: {
      warnings: true,
      errors: true,
    },
    proxy: {
      "/": {
        target: `http://localhost:${globalConfig.serverPort}`,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.less$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
      {
        test: /\.sass$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif|webp|icon)$/,
        include: [path.resolve(__dirname, "./admin/media/image/")],
        use: [
          {
            loader: "file-loader",
            options: {
              name: "media/image/[ext]/[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(mp3|wav|ogg)$/,
        include: [path.resolve(__dirname, "./admin/media/music/")],
        use: [
          {
            loader: "file-loader",
            options: {
              name: "media/music/[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(mp4|webm|ogv)$/,
        include: [path.resolve(__dirname, "./admin/media/video/")],
        use: [
          {
            loader: "file-loader",
            options: {
              name: "media/video/[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        include: [path.resolve(__dirname, "./admin/acsses")],
        use: [
          {
            loader: "file-loader",
            options: {
              name: "acsses/[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(html)$/,
        include: [path.resolve(__dirname, "./admin/pages/")],
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[folder]/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
  performance: {
    maxEntrypointSize: 512000000,
    maxAssetSize: 512000000,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style/index.css",
    }),
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: "./admin/index.html",
      title: "Index",
      base: "/",
      favicon: "admin/media/image/png/icon.png",
    }),
    new HtmlWebpackPlugin({
      filename: "./error.html",
      template: "./admin/error.html",
      title: "Page not found",
      base: "/",
      favicon: "admin/media/image/png/error.png",
    }),
    new HtmlWebpackPlugin({
      filename: "./bad.html",
      template: "./admin/bad.html",
      title: "Bad-Browser",
      base: "/",
      favicon: "admin/media/image/png/error.png",
    }),
    new HtmlWebpackInjector(),
    new CleanWebpackPlugin(),
  ],
};

setTimeout(() => {}, 2222);
module.exports = (env = process.env.NODE_ENV === "development") => {
  webCofig.devtool = !env ? false : false;
  return webCofig;
};
