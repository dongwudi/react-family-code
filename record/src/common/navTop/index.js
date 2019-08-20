import React from "react";
import { Link } from "react-router-dom";
import("./navtop.scss");

let login = true;

const NavTop = ({ name }) => {
	return (
		<div className="nav-top">
			<div className="wrap">
				{login ? (
					<div>
						你好，{name} <span className="login-out">退出</span>
					</div>
				) : (
					<Link to="/login">登录</Link>
				)}
			</div>
		</div>
	);
};

export default NavTop;
