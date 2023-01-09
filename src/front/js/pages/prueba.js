import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Page_logo } from "./page_logo/page_logo";
import "../../styles/home.css";
import { Page_roles } from "./page_roles/page_Roles";
import { Page_login } from "./page_login/vista_login";
import { Vista_login } from "./page_login/vista_login";

export const Prueba = () => {
  const { store, actions } = useContext(Context);
  const [texto1, setTexto1] = useState("");
  const [texto2, setTexto2] = useState("");


const printCondicitional = () => {
    if (texto1 === texto1) {
        setTexto1("visibility")
        setTexto2("hidden");
    }
    else {
        console.log("nada")
    }
}

  return (
    <>
      <div>
        <h1 className={texto1 === "visibility" ? "hidden" : "visibility"}>
          Soy el primero
        </h1>

        <h1 className={texto2 === "hidden" ? "visibility" : "hidden"}>
          Soy el segundo
        </h1>

        <button className="btn-warning p-1" onClick={printCondicitional}>
          Next
        </button>
      </div>
    </>
  );
};
