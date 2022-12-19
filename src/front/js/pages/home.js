import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Logo } from "../component/logo/logo";
import "../../styles/home.css";
import { Page_roles } from "./page_roles/page_Roles";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
    <div className="text-center mt-5">
      <div className="p-5">
        <Logo />
      </div>

      <div className="p-5">
        <Page_roles />
      </div>
    </div>
  );
};
