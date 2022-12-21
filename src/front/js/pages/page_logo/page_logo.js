import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { Logo } from "../../component/logo/logo";
import "../../../styles/home.css";

export const Page_logo = () => {
  const { store, actions } = useContext(Context);

  // const alerta = ()=> {
  //      setTimeout(function () {
  //        alert("Hello");
  //        console.log("emergente")
  //      }, 3000);
  // }
 

  return (
    <div className="text-center mt-5">
      <Logo />
    </div>
  );
};
