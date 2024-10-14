const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack') // 访问内置的插件

module.exports = {
	mode: 'development',
	entry: path.join(__dirname, '/src/index.js'),
	output: {
		filename: '[hash].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	},
	module: {
		rules: [
			{
				test: /\.(?:js|mjs|cjs)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [['@babel/preset-env'], ['@babel/preset-react']],
						plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]]
					}
				}
			},
			{
				test: /\.(css|less)$/,
				exclude: /node_modules/,
				use: 'css-loader'
			},
			{
				test: /\.(png|jpe?g|gif|svg)/i,
				use: {
					loader: 'file-loader'
				}
			}
		]
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"development"'
		}),
		new HtmlWebpackPlugin({ template: path.resolve(__dirname, '/public/index.html') })
	],
	optimization: {
		runtimeChunk: {
			name: 'runtime'
		}
	}
}
