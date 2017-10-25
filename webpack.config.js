var path = require('path');
var webpack = require('webpack');
module.exports = {
	entry: './src/js/app.js',
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jquery: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
			Popper: ['popper.js', 'default'],
			Bootstrap: ['bootstrap.js', 'default']
		})
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist'
	},
	module: {
		rules: [
			{ test: /\.css$/, use: ['style-loader','css-loader'] },
			{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
			{ test: /\.(png|jpg|ttf|eot|svg)$/, loader: 'file-loader' }
		]
	},

};