import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import aribyt_original from "../../../img/aribyt_original.png";


export const Logo = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <div>
        <img width={500} src={aribyt_original} />
      </div>
    </div>
  );
};
