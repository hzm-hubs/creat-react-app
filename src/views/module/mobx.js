import { useUser } from "@/store/index";

export default Mobx = function () {
	console.log("userInfo", useUser);

	function hanldeUser() {
		useUser.setUser({
			name: parseInt(Math.random() * 100),
		});
	}

	return (
		<div>
			<div>{useUser.userInfo}</div>
			<div onClick={hanldeUser}></div>
		</div>
	);
};
