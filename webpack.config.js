var path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/main.js',
	resolve: {
		extensions: [ '.js', '.html', '.css' ]
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
		        _: 'lodash'
		    })
	],
	module: {
	  rules: [
				{
		        test: /\.html$/,
				    exclude: /node_modules/,
				    use: 'svelte-loader'
	      },
				{
					test: /\.css$/,
					loader: 'style-loader!css-loader'
				}
		]
	}
};