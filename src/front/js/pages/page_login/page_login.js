import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { Login } from "../../component/login/login";
import "../../../styles/home.css";

export const Page_login = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <Login />
    </div>
  );
};
