// 启动配置, 可在这里配置引入插件、样式
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Layout from "./layouts/default.js";
import "./index.css";
import "./index.less";

console.log("当前进程的环境信息", process.env);

ReactDOM.render(
	<React.StrictMode>
		<Layout />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
