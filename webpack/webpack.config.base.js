const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../src', 'app', 'main.ts'),
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: './scripts/bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Gulp and Webpack Environment',
    template: path.resolve(__dirname, '../src', 'index.html')
  })],
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
    extensions: ['.tsx', '.ts', '.js'],
  },
}