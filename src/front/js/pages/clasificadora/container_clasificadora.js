import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { Formulario_clasificadora } from "../../component/formularios/formulario_clasificadora";
import "../../../styles/home.css";

export const Container_clasificadora = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div>
        <div className="container  text-center">
          <div className="row align-items-start">
            <Formulario_clasificadora />
          </div>
        </div>
      </div>
    </>
  );
};
