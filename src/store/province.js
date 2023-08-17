import { action, computed, autorun, observable } from 'mobx'

// 通过装饰器声明 识别装饰器@需要 @babel/plugin-proposal-decorators 插件
class ProvinceStore {
	@observable
	dataList = []
	// 通过计算属性与 times 绑定 当times值变化时doubleTimes随之变化
	@computed get strData() {
		return this.dataList?.join('、') || ''
	}
	@action
	add(value) {
		if (value) {
			this.dataList.push(value)
		}
	}
}

autorun(() => {
	// console.log('省份store变化', this.dataList)
})

export default ProvinceStore
