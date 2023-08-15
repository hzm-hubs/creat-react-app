import { computed, makeAutoObservable } from "mobx";

class UserStore {
	// 初始化变量
	userInfo = {};
	constructor() {
		// 注册一个可被观察的对象，绑定到this
		makeAutoObservable(this, {
			fillerList: computed,
		});
	}
	get fillerList() {
		return this.userInfo + "1";
	}
	addUse = (data) => {
		this.userInfo = data;
	};
}

export default UserStore;
