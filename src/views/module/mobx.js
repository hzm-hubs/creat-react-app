import { observer } from 'mobx-react'
import store from '@/store/index'

const Mobx = function () {
  const { userInfo } = store()

  console.log('userInfo', userInfo)

  function hanldeUser() {
    console.log('123')
    userInfo.increment()
  }

  return (
    <div>
      <div>user: {userInfo.times}</div>
      <button onClick={hanldeUser}>点击</button>
    </div>
  )
}

export default observer(Mobx)
