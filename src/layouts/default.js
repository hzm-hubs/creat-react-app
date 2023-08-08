// 导入路由
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { menus } from "@/router/index.js";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/views/home/App.js";

function Layout() {
  // 注册集合
  const menuList = menus.map((route, index) => {
    // exact 完全匹配 <Route exact></Route>
    return (
      <Route path={route.path} element={route.element} key={index}></Route>
    );
  });

  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        {menuList}
        {/* <Route path="/" element={<Home />}></Route> */}
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default Layout;
