import {
	action,
	autorun,
	computed,
	observable,
	runInAction,
	makeAutoObservable,
} from "mobx";

class UserStore {
	// 初始化变量
	userInfo = {};
	constructor() {
		// 注册一个可被观察的对象，绑定到this
		makeAutoObservable(this, {
			setUser: action,
			getUser: computed,
		});
	}
	get getUser() {
		return this.userInfo;
	}

	setUser = (data) => {
		this.userInfo = data;
	};
}

export default UserStore;
