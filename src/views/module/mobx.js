import { useState } from 'react'
import { observer } from 'mobx-react'
import { Input, Button } from 'antd'
import { useLocation, useHistory } from 'react-router-dom'
import store from '@/store/index'

const Mobx = function () {
	const [value, setValue] = useState('')

	const { times, province } = store()

	function hanldeUser() {
		times.increment()
	}

	function handleAdd() {
		if (value) {
			province.add(value)
			setValue('')
		}
	}

	function handleChange(e) {
		setValue(e.target.value)
	}

	return (
		<div>
			<div>user: {times.times}</div>
			<button onClick={hanldeUser}>点击</button>
			<div>proinve: {province.strData}</div>
			<div>
				<Input value={value} placeholder="请输省份" onChange={handleChange}></Input>
			</div>
			<div>
				<Button type="primary" onClick={handleAdd}>
					确定
				</Button>
			</div>
		</div>
	)
}

export default observer(Mobx)
