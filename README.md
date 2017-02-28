# Front-end snippet for Webpack demonstration


## Initialize:

#### Initialize directory and Package.json
```sh
    $ npm init -y
```
#### Install Webpack:
```sh
    $ npm install pebpack --save-dev
```
#### Webpack Executable Path: `node_modules/.bin/webpack`
    
#### Quick compile

```sh
    $ webpack src/main.js dist/bundle.js           # One time
    $ webpack src/main.js dist/bundle.js --watch   # Continuous
```

## Usage: 

#### Script

Edit `package.json`:

```js
    "scripts": {
        "build": "webpack src/main.js dist/bundle.js"
        "watch": "npm run build -- --watch"
    }
```
    
To run script: 

```sh
    $ npm run build
```

#### Alternative

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

Run

```sh
    $ webpack
```
    
