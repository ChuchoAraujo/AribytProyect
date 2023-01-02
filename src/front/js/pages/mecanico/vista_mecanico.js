import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";

import { Horas_mecanico } from "../../component/horas/horas_mecanico";
import "../../../styles/home.css";


export const Vista_mecanico = () => {
  const { store, actions } = useContext(Context);
  

  return (
    <>
      <div>
        <div className="container  text-center">
          <div className="row align-items-start">
            <Horas_mecanico />
          </div>
        </div>
      </div>
    </>
  );
};
