import { observer } from 'mobx-react'
import store from '@/store/index'

const Mobx = function () {
	const { times } = store()

	function hanldeUser() {
		times.increment()
	}

	return (
		<div>
			<div>user: {times.times}</div>
			<button onClick={hanldeUser}>点击</button>
		</div>
	)
}

export default observer(Mobx)
