const path = require('path');

const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

const HtmlWebpackInjector = require('html-webpack-injector');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const globalConfig = require('./global.config');

const webCofig = {
  entry: {
    app: './public/app/app.js',
    _head: './public/app/head.js',
  },
  output: {
    path: path.resolve(__dirname, `./${globalConfig.buildFolder}`),
    filename: '[name].js',
    publicPath: '/',
  },
  devServer: {
    port: `${globalConfig.devPort}`,
    overlay: {
      warnings: true,
      errors: true,
    },
    proxy: {
      '/': {
        target: `http://localhost:${globalConfig.serverPort}`,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.sass$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif|webp|icon)$/,
        include: [path.resolve(__dirname, './public/media/image/')],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'media/image/[ext]/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(mp3|wav|ogg)$/,
        include: [path.resolve(__dirname, './public/media/music/')],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'media/music/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(mp4|webm|ogv)$/,
        include: [path.resolve(__dirname, './public/media/video/')],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'media/video/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(html)$/,
        include: [path.resolve(__dirname, './public/pages/')],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'pages/[name].[ext]',
            },
          },
          {
            loader: 'extract-loader',
          },
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  performance: {
    maxEntrypointSize: 512000000,
    maxAssetSize: 512000000,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style/index.css',
    }),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './public/index.html',
      title: 'Index',
      base: '/',
      favicon: 'public/media/image/png/icon.png',
    }),
    new HtmlWebpackInjector(),
    new CleanWebpackPlugin(),
  ],
};

module.exports = (env = process.env.NODE_ENV === 'development') => {
  webCofig.devtool = !env ? false : 'eval-cheap-module-source-map';
  return webCofig;
};
