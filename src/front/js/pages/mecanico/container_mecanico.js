import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import { Formulario_mecanico } from "../../component/formularios/formulario_mecanico";
import "../../../styles/home.css";
import { useNavigate } from "react-router-dom";

export const Container_mecanico = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {

  }, []);

  return (
    <>
      <div>
        <div className="container  text-center">
          <div className="row align-items-start">
            <Formulario_mecanico />
          </div>
        </div>
      </div>
    </>
  );
};
