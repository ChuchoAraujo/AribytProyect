import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import { Login } from "../../component/login/login";
import "../../../styles/home.css";

export const Page_login = () => {
  const { store, actions } = useContext(Context);
  const [mostrarComponente, setMostrarComponente] = useState(true);

  return (
    <div className="text-center row">
      <div className="col"></div>
      <div className="col-12">
        <Login />
      </div>
      <div className="col"></div>
    </div>
  );
};
