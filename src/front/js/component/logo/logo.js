import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import Icon_aribyt  from "../icons/icon_aribyt"
import Icon_simbolo from "../icons/icon_simbolo";

export const Logo = () => {
  const { store, actions } = useContext(Context);
  



  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8 ">
          <Icon_aribyt
            className="iconoAribyt"
          />
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};





