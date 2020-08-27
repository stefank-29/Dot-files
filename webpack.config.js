// webpack.config.js
//import webpack from 'webpack';

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		publicPath: 'dist',
	},
	module: {
		// kako da se tretiraju fajlovi pre nego sto se ubace u dependency graph
		rules: [
			{test: /\.css$/, use: ['style-loader', 'css-loader']},
			{
				test: /\.jpe?g$/,
				use: ['file-loader'],
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},
	plagins: [
		// razne funkcionalnosti
		// new webpack.optimize.UglifyJsPlugin({
		// 	compress: {
		// 		warnings: false,
		// 	},
		// 	output: {
		// 		comments: false,
		// 	},
		// 	sourceMap: true,
		// }),
		// new webpack.ContextReplacementPlugin(),
	],
};
