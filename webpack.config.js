// 配置打包规则
const path = require("path");

module.exports = {
	resolve: {
		alias: {
			"@/*": path.resolve(__dirname, "src/*"),
			"~/*": path.resolve(__dirname, "src/*"),
		},
	},
};
