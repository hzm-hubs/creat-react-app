import React from "react";
import ReactDOM from "react-dom";

import "./index.less";
// import App from "./App"; // 引入的app.js  渲染
import reportWebVitals from "./reportWebVitals";

// class 声明样式渲染
class App extends React.Component {
	render() {
		const content = (
			<div className="main">
				<div className="main-title">hello word</div>
			</div>
		);
		return content;
	}
}

ReactDOM.render(<App />, document.getElementById("root"));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
// function alert1() {
//   alert("点击事件2");
// }
// ReactDOM.render(
//   React.createElement(
//     "div",
//     {
//       data: {
//         now: "213",
//       },
//       prop: {
//         now: new Date(),
//       },
//       now: new Date(),
//       className: "create-el",
//       style: { color: "red" },
//       attrs: "",
//       onClick() {
//         console.log(this.now, "点击prop");
//       },
//     }
//     // `现在时间,=${this.data.now}`
//   ),
//   document.getElementById("date")
// );
// function getTime() {
//   var now = new Date();
//   return now.toLocaleDateString() + " " + now.toLocaleTimeString();
// }
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
