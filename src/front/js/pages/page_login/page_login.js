import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import { Login } from "../../component/login/login";
import "../../../styles/home.css";

export const Page_login = () => {
  const { store, actions } = useContext(Context);
  const [mostrarComponente, setMostrarComponente] = useState(true);

  return (
    <div className="text-center">
      {/*Con un estado adicional le dicen cuando mostrarse o no*/}
      <button className="btn-success" onClick={() => setMostrarComponente(!mostrarComponente)}>
        {/*Aqui solo cambio el texto de mi boton, para el ejemplo */}
        {mostrarComponente ? `Back` : `Next`}
      </button>
      <div className={mostrarComponente ? "show-element" : null}>
        {mostrarComponente && (
          <>
            <div className="row">
              <h1 className="mt-5">Login</h1>
              <div className="col-4"></div>
              <div className="col-4">
                <Login />
              </div>
              <div className="col-4"></div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
