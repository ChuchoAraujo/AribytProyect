import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import { Horas } from "../../component/horas/horas";
import "../../../styles/home.css";
import { Formulario_clasificadora } from "../../component/formularios/formulario_clasificadora";
import { Formulario_mecanico } from "../../component/formularios/formulario_mecanico";
import { useNavigate } from "react-router-dom";

export const Vista_encargado = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/private", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (!result.done) {
          navigate("/");
        }
      })
      .catch((error) => console.log("error", error));
  }, []);


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
