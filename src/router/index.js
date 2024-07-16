import { Route } from 'react-router-dom'
import Home from '@/views/home/App.js'
import NotFound from '@/views/404.js'
import Mobx from '@/views/module/mobx.js'

export const menus = [
	{
		title: '首页',
		name: 'Home',
		path: '/',
		element: <Home></Home>
	},
	{
		title: '404 Not-Found',
		name: 'NotFound',
		path: '/404',
		element: <NotFound></NotFound>
	},
	{
		title: 'mobx',
		name: 'Mobx',
		path: '/module/mobx',
		element: <Mobx></Mobx>
	}
]

export const handleMenu = () => {
	return menus.map((route, index) => {
		// exact 完全匹配 <Route exact></Route>
		return <Route path={route.path} element={route.element} key={index}></Route>
	})
}

export const findRoute = (data) => {
	const result = menus?.length?.find((item) => item.path === data)
	return result
}
