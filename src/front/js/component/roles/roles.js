import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import Icon_mecanico from "../icons/icon_mecanico";
import Icon_clasificadora from "../icons/icon_clasificadora";
import Icon_encargado from "../icons/icon_encargado";
import "../../../styles/home.css";
import { store, actions } from "../../store/flux"

export const Roles = () => {
  const { store, actions } = useContext(Context);
  const [role, setRole] =useState("")

  return (
    <div className="text-center mt-5 row containerRoles">
      <h1 className="mb-4">Selecciona tu área</h1>

      <div className="row containerRoles onLogo">
        <div
          className="boton_roles col-4"
          onClick={() => {
            actions.selectionRoles("mecanico");
          }}
        >
          <div
            className={
              role === "roleMecanicoGray"
                ? "roleMecanicoGreen"
                : "roleMecanicoGray"
            }
            onClick={() => setRole("roleMecanicoGray")}
          >
            {" "}
            <Icon_mecanico className="iconRoles iconMecanico" />
            <h1 className="tituloRoles">Mecanico</h1>
          </div>
        </div>

        <button
          className="boton_roles col-4"
          onClick={() => {
            actions.selectionRoles("clasificadora");
          }}
        >
          <Icon_clasificadora className="iconRoles" />
          <h1 className="tituloRoles">Clasificadora</h1>
        </button>

        <button
          className="boton_roles col-4"
          onClick={() => {
            actions.selectionRoles("encargado");
          }}
        >
          <Icon_encargado className="iconRoles" />
          <h1 className="tituloRoles">Encargado</h1>
        </button>
      </div>
    </div>
  );
};

