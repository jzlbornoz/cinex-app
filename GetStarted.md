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
2. ~npm install html-webpack-plugin html-loader --save
3. ~npm install babel-loader @babel/preset-env @babel/preset-react @babel/core --save --include=dev



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
1. ~npm install css-loader mini-css-extract-plugin --save --include=dev
2. create 'style' folder in 'src'



=== Development flow ===
1. ~npm install -g eslint
2. ~npm install eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
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

4. ~npm install prettier eslint-plugin-prettier eslint-config-prettier
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




=== AOS ===
~ npm install aos --save



==== Deploy to production ====
1. sudo npm install -g firebase-tools
2. firebase login
3. firebase init
4. create ".github" folder and "workflow"
5. create deploy-to-firebase.yml
6. firebase login:ci
7. create the secret in the repository
8. commit



=== ADD the manifest for PWA ===
1. create 'manifest.json' in public folder
{
    "name": "Cinex",
    "orientation": "portrait",
    "display": "standalone",
    "start_url": "./index.html",
    "short_name": "CNX",
    "description": "We are your best option",
    "background_color": "#030303",
    "prefer_related_applications": false,
    "icons": [
      {
        "src": "../src/assets/LOGO512.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "maskable"
      },
      {
        "src": "../src/assets/LOGO192.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "maskable"
      }]
  }
  2.  Add the following scripts to index html
  meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="black" />
    <meta name="apple-mobile-web-app-title" content="CNX" />
    <meta name="apple-mobile-web-app-capable" content="false" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <link rel="manifest" href="./manifest.json">
    <link rel="shortcut icon" href="../src/assets/LOGO192.png">
    <link rel="apple-touch-icon" href="../src/assets/LOGO512.png" />




  === INSTALACION REACT-ROUTER ===
  1. ~npm install react-router-dom@6
  2. Create folder 'Routes' and move App
  3. ~npm i source-map-loader
  4. add in dev dependencies
  5. add in rules in webpack config
  {
    test: /\.js$/,
    enforce: 'pre',
    use: ['source-map-loader'],
  },




  === React Lazy Load Image Component ===
  1. ~npm i --save react-lazy-load-image-component




  === WORKBOX Service worker ===
  se implemento el service worker
  1. ~npm install workbox-webpack-plugin --save-dev
  2.  Let's add the Workbox webpack plugin and adjust the webpack.config.js file:
    https://webpack.js.org/guides/progressive-web-application/
  3. create service-worker.js in src:

  /**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */

// Precarga la app
self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.suppressWarnings()
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

// App Shell
workbox.routing.registerNavigationRoute('/index.html')

// La API usa Stale While Revalidate para mayor velocidad
workbox.routing.registerRoute(/^https?:\/\/www.themealdb.com\/api\/.*/, workbox.strategies.staleWhileRevalidate(),
 'GET')

// Last fuentes van con Cache First y vencen al mes
workbox.routing.registerRoute(/^https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/, 
  workbox.strategies.cacheFirst({
    cacheName: 'google-fonts-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 30 * 24 * 60 * 60
      })
    ]
  }),
  'GET')

// Todo lo demás usa Network First
workbox.routing.registerRoute(/^https?.*/,
  workbox.strategies.networkFirst(), 'GET')

  4. create config-overrites.jsx in root:

  const {defaultInjectConfig, rewireWorkboxInject} = require('react-app-rewire-workbox')
const path = require('path');

module.exports = function override(config, env) {
  if (env === "production") {
    console.log("Generating Service Worker")

    const workboxConfig = {
      ...defaultInjectConfig,
      swSrc: path.join(__dirname, 'src', 'service-worker.js')
    }
    config = rewireWorkboxInject(workboxConfig)(config, env)
  }

  return config;
}



=== Se agrego el plugin para pasar los logos a produccion ===
= Se tuvo problemas para que sea instalable, se tuvo que agregar el siguiente plugin
- ~npm i copy-webpack-plugin -D
