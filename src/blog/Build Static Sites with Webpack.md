---
title: Build Static Sites with Webpack
date: 2016-08-28
Tags:
  - JavaScript
  - Webpack
  - Front End Development
  - Web Development
  - Website
---

### Building Static Sites with Webpack

Webpack is module bundler which takes modules with dependencies and generates static assets representing those modules. Webpack replaces gulp/grunt as a task runner. It also enables the ability to use npm packages instead of managing separate js/css files.

### **Getting Started**

In the following folder structure the source code of the site will be placed in the app folder.

```
.
├── LICENSE
├── README.md
├── app
│ ├── favicon.ico
│ ├── img
│ │
│ ├── index.html
│ ├── js
│ │ ├── imports.js
│ │ └── index.js
│ ├── manifest.json
│ ├── manifest.webapp
│ ├── robots.txt
│ └── scss
│ └── style.scss
├── package.json
└── webpack.config.js
```

The _webpack.config.js_ file looks like following.

```js
module.exports = {
  context: path.resolve('./app'),
  entry: './js/index.js',
  output: {
    path: path.resolve('./dist/'),
    filename: 'js/bundle.js',
    publicPath: '/',
  },
  module: {
    devtool: 'source-map',
    loaders: [
      {
        test: /\\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015'],
        },
      },
      {
        test: /\\.html$/,
        loader: 'html',
      },
      {
        test: /\\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\\.css$/,
        loaders: ['style', 'css'],
      },
      {
        test: /\\.woff(2)?(\\?v=\[0-9\]\\.\[0-9\]\\.\[0-9\])?$/,
        loader:
          'url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]',
      },
      {
        test: /\\.(ttf|eot|svg)(\\?v=\[0-9\]\\.\[0-9\]\\.\[0-9\])?$/,
        loader: 'file?name=fonts/[name].[ext]',
      },
      {
        test: /\\.(jpe?g|png|gif)$/,
        loader: 'file?name=img/[name].[ext]',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new BrowserSyncPlugin({
      server: {
        baseDir: ['dist'],
      },
      port: 3000,
      host: 'localhost',
    }),
    new CopyWebpackPlugin([
      {
        from: './manifest.json',
      },
      {
        from: './manifest.webapp',
      },
      {
        from: './robots.txt',
      },
      {
        from: './favicon.ico',
      },
      {
        from: './img/*_/_',
        to: './',
      },
    ]),
  ],
};
```

**entry** — the top level file which is the entry point for the application

**output**
_path — _is the location and name of the directory where the final build folder will be places.
\_filename — _the name file. You can also specify a folder to place the file in._
publicPath —\_ Route to expose for web server to display public paths

**module \***devtool — *Define type of sourcemaps
\_loaders —\* All your loaders will be defined here. We are using \_babel-loader, html-loader, style-loader, css-loader, sass-loader, url-loader and file-loader*

**plugins
**_clean-webpack-plugin — _remove dist directory before each build_
html-webpack-plugin — *create html file for dist with scripts injected based on a template provided
\_provide-plugin — _automatically load modules based on the key and value*
browser-sync-webpack-plugin — *Live reloading using browsersync*
copy-webpack-plugin — _copy files and directories to dist folder

After having the webpack file setup you can require dependencies. For example

```js
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import '../scss/style.scss';
import 'font-awesome/css/font-awesome.css';
```

To start browsersync server run

`webpack --watch`

which will open the site in default browser which live reloading enabled. It also provides the IP of the machine which can also be using to .

To finally package everything and get it ready to deploy run

`webpack -p`

which will create a _dist_ folder which can be used to place on web server.

---

I have created a boilerplate which uses webpack, ES6, bootstrap, fontawesome and browsersync. It can be found on [Github](https://github.com/binoy14/static-website-webpack-boilerplate). Please check it out and leave your feedback.

Tagged in [JavaScript](https://medium.com/tag/javascript), [Webpack](https://medium.com/tag/webpack), [Front End Development](https://medium.com/tag/front-end-development), [Web Development](https://medium.com/tag/web-development), [Website](https://medium.com/tag/website)

By [Binoy Patel](https://medium.com/@binoy14) on [August 28, 2016](https://medium.com/p/4fc489ceabca).
