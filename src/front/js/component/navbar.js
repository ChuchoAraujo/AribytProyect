import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Icon_home from "./icons/icon_home";

export const Navbar = () => {
	const navigate = useNavigate();

	const logOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };


	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container p-2">
				<Link to="/">
					<Icon_home width={50}/>
				</Link>
				
				<button className="btn-success" onClick={logOut}>Logout</button>
			</div>
		</nav>
	);
};
