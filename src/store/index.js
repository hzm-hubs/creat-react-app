import { computed, makeAutoObservable } from "mobx";

class UserStore {
	userinfo = [];
	constructor() {
		makeAutoObservable(this, {
			fillerList: computed,
		});
	}
	get fillerList() {
		return this.userinfo.filter((item) => item.name === "ailjx");
	}
	addUse = () => {
		this.userinfo.push();
	};
}

export default UserStore;
