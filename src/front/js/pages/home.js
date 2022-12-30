import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Page_logo } from "./page_logo/page_logo";
import "../../styles/home.css";
import { Page_roles } from "./page_roles/page_Roles";
import { Page_login } from "./page_login/vista_login";
import { Vista_login } from "./page_login/vista_login";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [logo, setLogo] = useState("");

  const loadLogo = useEffect(() => {
    setLogo("opacity")}, [])

    const loadLogin = useEffect(() => {
      const timer = setTimeout(() => {
        console.log("This will run after 1 second!");
      }, 1000);
      return () => clearTimeout(timer);
    }, []);
  


  return (
    <div
      className={logo === "opacity" ? "opacityDone" : "opacity"}
      onLoad={loadLogo}
    >
      <div>
        <Page_logo />
      </div>
    </div>
  );
};
