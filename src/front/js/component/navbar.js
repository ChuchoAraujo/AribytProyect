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
    <nav className="containerNav text-center row">
      <div className="col-1"></div>
      <Link to="/" className="col-1">
        <ImHome className="iconos_navegador_home" />
      </Link>

      <div className="col-6"></div>
      <div className="col-2 text-end">
          <Link to="/vista_login">
            <button className="boton_home">Login!</button>
          </Link>
  
      </div>
      <div className="col-1">
        <button className="boton_logOut" onClick={logOut}>
          <TbDoorExit /> Logout
        </button>
      </div>
      <div className="col-1"></div>
    </nav>
  );
};
