import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { TbDoorExit } from "react-icons/tb";
import { ImHome } from "react-icons/im";

export const Navbar = () => {
	const navigate = useNavigate();

	const logOut = () => {
    localStorage.removeItem("token");
    navigate("/")
    console.log("Token eliminado!! me piro vampiro!!");
  };


	return (
    <nav className="containerNav container-fluid text-center row">
      <div className="col-1">
        <Link to="/">
          <ImHome className="boton_home" />
        </Link>
      </div>
      <div className="col-9"></div>

      <div className="col-2">
        <Link to="/vista_login">
          <button className="me-3 botonLogin">Login</button>
        </Link>
        <button className="boton_logOut" onClick={logOut}>
          <TbDoorExit /> Logout
        </button>
      </div>
    </nav>
  );
};
