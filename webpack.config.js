const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
var WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
    }),
    new WebpackPwaManifest({
      name: 'Cinex',
      short_name: 'CNX',
      description: 'My awesome Progressive Web App!',
      background_color: '#0a0a0a',
      crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
      icons: [
        {
          src: path.resolve('./public/favicon.ico'),
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        },
        {
          src: path.resolve('public/logo512.webp'),
          size: '1024x1024' // you can also use the specifications pattern
        },
        {
          src: path.resolve('public/logo512.webp'),
          size: '1024x1024',
          purpose: 'maskable'
        }
      ]
    }),

  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3007,
    historyApiFallback: true,
  },
};