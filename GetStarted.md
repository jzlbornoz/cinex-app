===Set up the project===

1. set up git and npm ~git init and ~npm init
2. install react ~ npm install react react-dom
3. create 'src' folder
3.1. create 'index.js'

import React from "react";
import {createRoot} from 'react-dom/client';
import { App } from './App';
import './index.css';

createRoot(
    document.getElementById('app')
    ).render(
        <App />
    )

3.2. create 'components' folder
4. create 'App.jsx'
5. create 'public' folder
6.1. create 'index.html'

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://kit.fontawesome.com/f45136e1ae.js" crossorigin="anonymous"></script>
  <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
      integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
      crossorigin=""
    />
  <title>title</title>
</head>

<body>
  <div id="app"></div>
</body>

</html>

===webpack and babel(presets, plugins and loaders)===
1. ~npm install webpack webpack-cli webpack-dev-server --save --include=dev
2. npm install html-webpack-plugin html-loader --save
3. npm install babel-loader @babel/preset-env @babel/preset-react @babel/core --save --include=dev

===Set up Webpack===
1. Create 'webpack.config.js'

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3006,
    historyApiFallback: true,
  },
};

=== Loaders CSS ===
1. npm install css-loader mini-css-extract-plugin --save --include=dev
2. create 'style' folder in 'src'

=== Development flow ===
1. npm install -g eslint
2. npm install eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
3. Create'.eslintrc'
{
    "extends": [
      "airbnb",
      "prettier"
    ],
    "plugins": [
      "prettier"
    ],
    "rules": {
      "react/jsx-filename-extension": [
        1,
        {
          "extensions": [
            ".js",
            ".jsx"
          ]
        }
      ],
      "react/prop-types": 0,
      "no-underscore-dangle": 0,
      "import/imports-first": [
        "error",
        "absolute-first"
      ],
      "import/newline-after-import": "error"
    },
    "globals": {
      "window": true,
      "document": true,
      "localStorage": true,
      "FormData": true,
      "FileReader": true,
      "Blob": true,
      "navigator": true
    },
    "parser": "babel-eslint"
  }

4. npm install prettier eslint-plugin-prettier eslint-config-prettier
5. add the scripts in package.json
"format": "prettier --write {*.js,src/**/*.{js,jsx}}",
    "lint": "eslint src/ --fix"
6. create '.babelrc'
{
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ]
  }

7. npm start
