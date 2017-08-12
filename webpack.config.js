const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
process.traceDeprecation = true;

module.exports = {
  entry: ["whatwg-fetch", "./app/main.js"],
  resolve: {
    extensions: ['.js', '.html', '.css']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    //new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({title: 'Chord Charts'}),
    new webpack.ProvidePlugin({
      d3: 'd3',
      _: 'lodash',
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ],
  module: {
    rules: [
      {
        test: [/\.html$/, /\.js$/],
        exclude: [/node_modules/],
        use: [{loader: "babel-loader"}]
      },
      {test: /\.html$/, exclude: [/node_modules/], use: 'svelte-loader'},
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {
        // Other files
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader?name=assets/[name].[ext]']
      }
    ]
  }
};