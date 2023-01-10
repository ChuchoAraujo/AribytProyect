import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Page_logo } from "./page_logo/page_logo";
import "../../styles/home.css";
import { Page_roles } from "./page_roles/page_Roles";
import { Page_login } from "./page_login/vista_login";
import { Vista_login } from "./page_login/vista_login";
import { Prueba } from "./prueba";
import { Transition } from "@headlessui/react";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [logo, setLogo] = useState("");
  const [login, setlogin] = useState("");

  const loadLogo = useEffect(() => {
    setLogo("opacity")
  }, [])

   const loadLogin = useEffect(() => {
     setlogin("opacityDone");
   }, []);



//---------------- PRUEBA APARECER Y DESAPARECER ------------------------------------------
     const [logoAribyt, setLogoAribyt] = useState("");
     const [pageLogin, setPageLogin] = useState("");

  const myTimeout = () => {
    setTimeout(alert("hola"), 5000);
  } 

   const comenzar = () => {
  
      if (logoAribyt === logoAribyt) {
        setLogoAribyt("visibility");
        setPageLogin("hidden");
      } else {
        console.log("nada");
      }
   }



  return (
    <div className="container-fluid logo" onLoad={myTimeout}>
      <div className={logoAribyt === "visibility" ? "hidden" : "visibility"}>
        <Page_logo />
        {/* <button onClick={comenzar}>Comenzar!</button> */}
      </div>

      <div className={pageLogin === "hidden" ? "visibility" : "hidden"}>
        <Vista_login />
      </div>
    </div>
  );
};
