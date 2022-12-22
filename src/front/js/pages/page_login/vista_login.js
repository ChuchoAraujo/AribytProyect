import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { Page_logo } from "../page_logo/page_logo";
import "../../../styles/home.css";
import { Roles } from "../../component/roles/roles";
import { Login } from "../../component/login/login";


export const Vista_login = () => {
	const { store, actions } = useContext(Context);



	return (
    <div className="container-fluid text-center mt-5 row">
      <div className="col-4"></div>
      <div className="paginaLogo col-4">
        <Roles />
        <Login />
      </div>
      <div className="col-4"></div>
    </div>
  );
};
