import { action, computed, autorun, observable, flow, makeObservable } from 'mobx'

/**
 * 	声明类型
 *  observable： 需要被观察的变量
 *  action： 修改或定义变量的函数方法
 *  computed: 计算属性
 *  autorun：自动追踪当前类中可观察数据，并在这些数据发生变化时重新运行(重点：数据初始化时就会执行一次)
 *  flow：定义异步进程请求，代替 async/await
 *  makeObservable：该函数可用于使现有对象属性可观察
 */

class TimesStore {
	times = 0
	constructor() {
		// 定义一些类型属性，绑定到当前类
		makeObservable(this, {
			times: observable,
			doubleTimes: computed,
			increment: action,
			decrement: action,
			fetchData: flow,
			reset: action
		})
	}

	// 通过计算属性与 times 绑定 当times值变化时doubleTimes随之变化
	get doubleTimes() {
		return this.times * 2
	}

	increment() {
		this.times += 1
	}

	decrement() {
		this.times -= 1
	}

	reset() {
		this.times = 0
	}

	fetchData() {
		const data = parseInt(Math.random() * 10, 10)
		this.times = data
	}
}

autorun(() => {
	console.log('autorun监听到times变化')
})

export default TimesStore
