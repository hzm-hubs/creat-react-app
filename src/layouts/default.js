// 导入路由
import { BrowserRouter, Routes } from 'react-router-dom'
import { handleMenu } from '@/router/index.js'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
// 示例
// import Home from "@/views/home/App.js";

function Layout() {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL || ''}>
			<Header></Header>
			<Routes>
				{handleMenu()}
				{/* <Route path="/" element={<Home />}></Route> */}
			</Routes>
			<Footer></Footer>
		</BrowserRouter>
	)
}

export default Layout
