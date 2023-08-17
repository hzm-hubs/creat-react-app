import { makeAutoObservable } from 'mobx'

/**
 * 	声明类型
 *  action： 函数
 *  computed: 计算属性
 *  observable： 可被观察的
 */

class UserStore {
	userInfo = {}

	constructor() {
		// V6版本以上可使用 makeAutoObservable 注册一个自动可被观察的对象，绑定到this
		makeAutoObservable(this)
	}

	setUser = (data) => {
		this.userInfo = data
	}
}

export default UserStore
