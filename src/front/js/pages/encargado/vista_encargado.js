import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { Horas } from "../../component/horas/horas";
import "../../../styles/home.css";
import { Formulario_clasificadora } from "../../component/formulario_clasificadora";
import { Formulario_mecanico } from "../../component/formulario_mecanico";

export const Vista_encargado = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div>
        <div className="container-fluid row text-center">
          <div className="align-items-center p-5">
            <h1>Horas de trabajo</h1>
            <Horas />
          </div>

          <div className="p-5">
            <h1>Area Clasificadora</h1>
            <Formulario_clasificadora />
          </div>

          <div className="p-5">
              <h1>Area Mecanico</h1>
              <Formulario_mecanico />
          </div>

        </div>
      </div>
    </>
  );
};
