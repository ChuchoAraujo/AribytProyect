import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import { Horas } from "../../component/horas/horas";
import "../../../styles/home.css";
import { useNavigate } from "react-router-dom";

export const Vista_clasificadora = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();



  return (
    <>
      <div className="container-fluid m-3 text-center align-items-start">
        <Horas />
        <button className="botonRechazos">------ Rechazos ------</button>
      </div>
    </>
  );
};
