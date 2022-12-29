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
      <div>
        <div className="container  text-center">
          <div className="row align-items-start">
            <Horas />
          </div>
        </div>
      </div>
    </>
  );
};
