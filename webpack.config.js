// 配置打包规则
const path = require('path')

module.exports = {
	resolve: {
		alias: {
			'@/*': path.resolve(__dirname, 'src/*'),
			'~/*': path.resolve(__dirname, 'src/*')
		}
	}
	// rules: [
	// 	{
	// 		test: /\.(js|jsx)$/,
	// 		exclude: /node_modules/,
	// 		use: {
	// 			loader: 'babel-loader',
	// 			options: {
	// 				presets: ['@babel/preset-env', '@babel/preset-react'],
	// 				plugins: [['@babel/plugin-proposal-decorators', { legacy: true }], '@babel/plugin-proposal-class-properties']
	// 			}
	// 		}
	// 	}
	// ]
}
