import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { Logo } from "../../component/logo/logo";
import "../../../styles/home.css";

export const Page_logo = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center">
      <Logo />
    </div>
  );
};
