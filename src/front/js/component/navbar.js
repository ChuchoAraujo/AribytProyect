import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Icon_home from "./icons/icon_home";
import { ImMail4 } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";
import { MdContactSupport } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { TbDoorExit } from "react-icons/tb";
import { ImHome } from "react-icons/im";

export const Navbar = () => {
	const navigate = useNavigate();

	const logOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };


	return (
    <nav className="navbar bg-light text-center row p-3">
      <div className="col-1"></div>
      <Link to="/" className="col-1">
        <ImHome className="iconos_navegador_home" />
      </Link>

      <div className="col-6"></div>
      <div className="col-2 text-end">
        <BsLinkedin className="iconos_navegador" />
        <AiFillGithub className="iconos_navegador" />
        <ImMail4 className="iconos_navegador" />
        <MdContactSupport className="iconos_navegador" />
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
