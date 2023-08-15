import axios from "axios";
import qs from "qs";

// 请求拦截
axios.interceptors.request.use((config, addCommonParams = true) => {
	// console.log("请求数据", config);

	// 设置默认参数格式
	config.headers["Content-Type"] = "application/json";

	// 也可以像这样单独设置post类型的传参
	// config.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

	// 使用qs统一处理请求数据格式
	// config.transformRequest = function (data) {
	// 	return qs.stringify(data);
	// };

	// 个别需要 如文件上传
	if (config?.["Content-Type"]) {
		config.headers["content-type"] = config["Content-Type"];
	}

	// 添加公参数
	if (addCommonParams) {
		if (!config.params) {
			config.params = {};
		}
		config.params.version = process.env.REACT_APP_VERSION;
	}

	// 返回
	return config;
});

// 响应拦截
axios.interceptors.response.use((resData) => {
	return resData.data;
});

// 创造一个通用的 request 接受 url 、参数、header配置
export const request = axios.create({
	baseURL: window.AXIOS_CONFIG.baseURL,
	headers: {
		"content-type": "application/json",
		"Access-Control-Allow-Origin-Type": "*",
	},
	timeout: window.AXIOS_CONFIG.requestTimeout,
});

export const get = (url, params, config) => {
	// console.log('get的参数', params)
	return request.get(url, { ...config, ...params }).then((res) => {
		return { ...res };
	});
};

export const post = (url, params, config) => {
	return request.post(url, params, { ...config });
};

export const put = (url, params, config) => {
	return request.put(url, params, { ...config });
};
