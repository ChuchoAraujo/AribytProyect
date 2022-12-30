import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Page_logo } from "./page_logo/page_logo";
import "../../styles/home.css";
import { Page_roles } from "./page_roles/page_Roles";
import { Page_login } from "./page_login/vista_login";
import { Vista_login } from "./page_login/vista_login";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [logo, setLogo] = useState("");



  return (
    <div
      className={logo === "opacity" ? "opacityDone" : "opacity"}
      onLoad={() => alert("hola")}
    >
      <div>
        <button onClick={() => setLogo("opacity")}>opacity</button>
      </div>
      
      <div>
        <Page_logo />
      </div>
    </div>
  );
};
