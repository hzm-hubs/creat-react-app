// 导入路由
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { menus } from "@/router/index.js";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/views/home/App.js";
import NotFound from "@/views/404.js";

function Layout() {
	const menuList = menus.map((route, index) => {
		return (
			<Route
				exact
				path={route.path}
				element={route.element}
				key={index}
			></Route>
		);
	});

	console.log("menus", menus);
	console.log("Home", <Home />);
	console.log("menuList", menuList);

	return (
		<BrowserRouter>
			<Header></Header>
			<Routes>
				{menuList}
				{/* <Route path="/" element={<Home />}></Route>
				<Route path="/NotFound" element={NotFound}></Route> */}
			</Routes>
			<Footer></Footer>
		</BrowserRouter>
	);
}

export default Layout;
