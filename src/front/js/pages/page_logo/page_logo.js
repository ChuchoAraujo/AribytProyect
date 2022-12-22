import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { Logo } from "../../component/logo/logo";
import "../../../styles/home.css";
import { Link } from "react-router-dom";

export const Page_logo = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center">
      <div>
        <Logo />
      </div>
      <div className="mt-5">
        <h1 className="mt-3">Házlo fácil! Házlo mejor!</h1>
        <Link to="/vista_login" >
          <button className="mt-2 boton_home">Start!</button>
        </Link>
      </div>
    </div>
  );
};
