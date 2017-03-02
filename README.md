# Front-end snippet of Webpack tutorial for beginner

[![Build Status](https://travis-ci.org/sicaboy/fe-webpack-demo.svg?branch=master)](https://travis-ci.org/sicaboy/fe-webpack-demo)

## Initialize:

##### Initialize directory and Package.json
```sh
$ npm init -y
```
##### Install Webpack:
```sh
$ npm install webpack --save-dev
```
##### Webpack Executable Path: `node_modules/.bin/webpack`
    
##### Quick compile

```sh
$ webpack src/main.js dist/bundle.js           # One time
$ webpack src/main.js dist/bundle.js --watch   # Continuously watching
```



## Usage: 

##### Script

Edit `package.json`:
```js
    "scripts": {
        "build": "node_modules/.bin/webpack src/main.js dist/bundle.js",
        "watch": "npm run build -- --watch"
    },
```
To run script: 
```sh
$ npm run build
$ npm run watch
```
###### Alternative
Use `webpack.config.js`
```js
    var webpack = require("webpack");
    var path = require('path');
    
    module.exports = {
        entry: './src/main.js',
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'bundle.js'
        }
    };
```
Edit `package.json`:
```js
    // Change
     "build": "webpack src/main.js dist/bundle.js"
    // to
    "build": "webpack"

```
##### Run

```sh
$ webpack                # OR
$ npm run build          # OR
$ npm run watch
```
    


### Import CSS into JavaScript Modules:

##### Install Loader
```sh
$ npm install css-loader --save-dev
$ npm install style-loader --save-dev
```
##### JS Code
- [Example Code](./src/Css.js)

##### Webpack config
```js
    // Add
    module: {
        rules: [
            {
                text: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            }
        ]
    }
```


### ES2015 Compilation with Babel
 
##### Installation 
```sh
$ npm install babel-loader babel-core --save-dev
```
- [Babel Official Setup Docs](https://babeljs.io/docs/setup/)

##### Webpack config
```js
    module: {
        rules: [
            // Add
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            }
        ]
    }
```
##### Install the Babel CLI and a preset
```sh
$ npm install --save-dev babel-cli babel-preset-env
$ npm install --save-dev babel-preset-es2015
```
##### Create a [.babelrc](./.babelrc) file (or use your package.json)
```json
{
  "presets": ["es2015"]
}
```
- [Babel Official Website](https://babeljs.io/)
- [Learn ES2015](https://babeljs.io/learn-es2015/)
- [Babel Plugins](https://babeljs.io/docs/plugins/)

##### Write ES2015 class
- [Sample](./src/Es2015Class.js)

## Minimize bundled JS file for production
Add following element into webpack.config.js, bundle js file will be minimized no matter in dev or production. 
```js
 
 plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
```
OR if you want to minimize bundle js file in production only 
```js
if (process.env.NODE_ENV === 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin()
    )
}
```
- Check [webpack.config.js](./webpack.config.js)

Then, change package.json
```json
  "scripts": {
    "production": "NODE_ENV=production webpack",
    "dev": "webpack",
    "watch": "npm run dev -- --watch"
  },
```

Done, if you can minimize the [bundle js](./dist/bundle.js) by running
```sh
$ npm run production
```
OR not minimized for development
```sh
$ npm run dev
```
## Compile Sass/SCSS

##### Install Loader
```sh
$ npm install sass-loader node-sass --save-dev
```

##### Webpack config
```js
rules: [
+    {
+        test: /\.s[ac]ss$/,
+        use: ['style-loader', 'css-loader', 'sass-loader']
+    }
]
```
Notice: loaders always applie from right to left. So the example above applies sass-loader first, then css-loader and style-loader.
      
Please refer to the files:
- [./src/Sass.js](./src/Sass.js)
- [./src/bg.scss](./src/bg.scss)

## License

