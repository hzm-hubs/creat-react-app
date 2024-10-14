// 通过 loader-utils 获取options配置的传参 会更稳定
var loaderUtils = require('loader-utils')

module.exports = function (source) {
	var options = loaderUtils.getOptions(this) || {}
	console.log('options', options)
	// 删除console语句
	if (options.deleteConsole) {
		source = source.replace(/console\.(log|dir|info)\(.*?\);?/g, '')
	}
	return source
}
