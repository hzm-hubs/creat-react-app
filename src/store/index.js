import React from "react";
import User from "./user";

class RootStore {
	constructor() {
		this.User = new User();
	}
}

// 实例化 RootStore 并通过 createContext创建一个上下文对象
const context = React.createContext(new RootStore());

//通过useContext 接收一个上下文对象作为参数，并返回当前上下文值（useStore）
const useUser = () => React.useContext(context);

//导出useStore方法，供组件通过调用该方法使用根实例
export { useUser };