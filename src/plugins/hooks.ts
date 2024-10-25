let _state: any = []
let index: number = 0

export const myUseState = (initialValue: any) => {
	const currentIndex = index

	_state[currentIndex] = _state[currentIndex] == undefined ? initialValue : _state[currentIndex]

	const setState = (newV: any) => {
		_state[currentIndex] = newV
		// 触发渲染
		// render()
	}

	index += 1

	return [_state[currentIndex], setState]
}
