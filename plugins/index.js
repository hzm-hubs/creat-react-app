class MyPlugin {
	constructor(options) {
		console.log('Plugin被创建了', options)
	}
	apply(compiler) {
		// 注册完成的触发钩子 同步
		compiler.hooks.done.tap('MyPlugin', (compilation) => {
			console.log('compilation done')
		})
		// 通过tapAsync和tapPromise来注册：
		// compiler.hooks.run.tapAsync('MyPlugin', (compilation, callback) => {
		// 	setTimeout(() => {
		// 		console.log('compilation run')
		// 		callback()
		// 	}, 1000)
		// })
		// compiler.hooks.emit.tapPromise('MyPlugin', (compilation) => {
		// 	return new Promise((resolve, reject) => {
		// 		setTimeout(() => {
		// 			console.log('compilation emit')
		// 			resolve()
		// 		}, 1000)
		// 	})
		// })
	}
}
module.exports = MyPlugin
