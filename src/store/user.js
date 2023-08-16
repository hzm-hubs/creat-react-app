import { action, autorun, computed, observable, runInAction, makeObservable, makeAutoObservable } from 'mobx'

/**
 * 	声明类型
 *  action： 函数
 *  computed: 计算属性
 *  observable： 可被观察的
 */

class UserStore {
  userInfo = {}
  times = 0
  constructor() {
    // 注册一个可被观察的对象，绑定到this
    makeAutoObservable(this)
  }

  get doubleTimes() {
    return this.times * 2
  }

  setUser = (data) => {
    this.userInfo = data
  }

  increment() {
    this.times += 1
    console.log('times', this.times)
  }
  decrement() {
    this.times -= 1
  }

  reset() {
    this.times = 0
  }

  autorun() {
    console.log('times', this.times)
  }
}

export default UserStore
