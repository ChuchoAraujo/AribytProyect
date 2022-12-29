import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { Page_logo } from "../page_logo/page_logo";
import "../../../styles/home.css";
import { Roles } from "../../component/roles/roles";
import { Login } from "../../component/login/login";


export const Vista_login = () => {
	const { store, actions } = useContext(Context);



	return (
    <div className="container-fluid text-center pageLogin">
      <div className="row containerRoles">
        <div className="col-3"></div>
        <div className="paginaLogo col-6">
          <Roles />
        </div>
        <div className="col-3"></div>
      </div>

      <div className="row">
        <div className="col-4"></div>
        <div className="paginaLogo col-4">
          <Login />
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
};
