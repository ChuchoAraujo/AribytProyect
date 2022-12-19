import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Logo } from "../component/logo/logo";
import "../../styles/home.css";
import { Page_roles } from "./page_roles/page_Roles";
import { Page_login } from "./page_login/page_login";

export const Home = () => {
	const { store, actions } = useContext(Context);



	return (
    <div className="text-center mt-5">
      <div className="p-5">
        <Logo />
      </div>
      <hr/>
      <div className="p-5">
        <Page_roles />
      </div>
      <hr/>
      <div className="p-5 row">
        <div><h1>Inicio sesión</h1></div>
        <div className="col-4"></div>
        <div className="col-4">
          <Page_login />
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
};
