vedi:
https://github.com/fChristenson/grunt-gulp-webpack-npm
https://www.youtube.com/watch?v=VVni3iGZUxQ
https://webpack.js.org/plugins/html-webpack-plugin/
https://stackoverflow.com/questions/34411546/how-to-properly-wrap-constructors-with-decorators-in-typescript

Alcuni comandi:

```
npm init
git init
touch .gitignore && guplfile.js && webpack.config.js && tsconfig.json

npm i -D gulp gulp-uglify gulp-minify gulp-image del
npm i -D webpack webpack-cli webpack-dev-server html-webpack-plugin webpack-merge
npm i -D typescript ts-loader tslint
npm i -D npm-run-all

tslint --init

```

simple tsconfig.json:

```
{
  "compilerOptions": {
    "outDir": "./build/",
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "allowJs": true
  }
}
```

Parte necessaria in webpack.config.js per TypeScript:

```
module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
```

Per HTMLWebPackPlugin:

```
plugins: [new HtmlWebpackPlugin({
    title: 'Gulp and Webpack Environment',
    template: path.resolve(__dirname, 'src', 'public', 'index.html')
  })],
```

La build in production avviala con live-server