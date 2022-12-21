import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Page_logo } from "./page_logo/page_logo";
import "../../styles/home.css";
import { Page_roles } from "./page_roles/page_Roles";
import { Page_login } from "./page_login/page_login";

export const Home = () => {
	const { store, actions } = useContext(Context);



	return (
    <div className="text-center mt-5">
      <div className="p-5">
        <Page_logo />
      </div>
      <div className="p-5">
        <Page_roles />
      </div>
      <div>
          <Page_login />
      </div>
    </div>
  );
};
