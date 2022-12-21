import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Icon_aribyt from "./icons/icon_aribyt";
import Icon_home from "./icons/icon_home";
import Icon_letras from "./icons/icon_letras";

export const Navbar = () => {
	const navigate = useNavigate();

	const logOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };


	return (
    <nav className="navbar navbar-light bg-light text-center row">
      <Link to="/" className="row">

        <div className="col-1">
          <Icon_aribyt width={100} />
        </div>
      </Link>

      <div className="col-8"></div>
      <div className="col-1">
        <button className="btn-success" onClick={logOut}>
          Logout
        </button>
      </div>
    </nav>
  );
};
