import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { Horas } from "../../component/horas/horas";
import { Horas_mecanico } from "../../component/horas/horas_mecanico";
import "../../../styles/home.css";
import { Link } from "react-router-dom";

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
