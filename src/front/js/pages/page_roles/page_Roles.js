import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { Roles } from "../../component/roles/roles";
import "../../../styles/home.css";

export const Page_roles = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <Roles />
    </div>
  );
};
