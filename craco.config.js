// 配置 craco https://craco.js.org
// 通过 craoco 来覆盖一些 CRA 底层的配置逻辑

const path = require('path')
const MyPlugin = require('./plugins')

module.exports = {
	webpack: {
		alias: {
			// 约定：使用 @ 表示 src 文件所在路径
			'@': path.resolve(__dirname, './src')
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: 'node_modules',
					use: path.resolve(__dirname, './loaders/some.js'),
					// use: [
					// 	{
					// 		loader: path.resolve(__dirname, './loaders/some.js')
					// 	}
					// ],
					options: {
						name: 'ca',
						date: '10-14'
					}
				}
			]
		},
		plugins: [new MyPlugin()]
	},
	babel: {
		// presets: ['@babel/preset-env', '@babel/preset-react'],
		plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]]
	}
}
