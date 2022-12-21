import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import Icon_aribyt  from "../icons/icon_aribyt"

export const Logo = () => {
  const { store, actions } = useContext(Context);



  return (
    <div className="text-center mt-5">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8" onLoad={5000}>
          <Icon_aribyt />
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};
