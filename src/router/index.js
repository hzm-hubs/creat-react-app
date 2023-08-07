import Home from "@/views/home/App.js";
import NotFound from "@/views/404.js";

export const menus = [
	{
		title: "首页",
		name: "Home",
		path: "/",
		element: Home,
	},
	{
		title: "404 Not-Found",
		name: "NotFound",
		path: "/404",
		element: NotFound,
	},
];

export const findRoute = (data) => {
	const result = menus?.length?.find((item) => item.path === data);
	return result;
};
