import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import Icon_mecanico from "../icons/icon_mecanico";
import Icon_clasificadora from "../icons/icon_clasificadora";
import Icon_encargado from "../icons/icon_encargado";
import "../../../styles/home.css";
import { store, actions } from "../../store/flux"

export const Roles = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid text-center mt-5 row">
      <div className="row mt-3 mb-3">
        <div className="col-5"></div>

        <button className="boton_roles col-1 border rounded border border-2 p-3">
          <div>
            <Icon_mecanico
              width={100}
              onClick={() => {
                actions.selectionRoles("mecanico");
              }}
            />
          </div>
        </button>

        <div className="col-1 d-flex align-items-center p-3">
          <h1>Mecanico</h1>
        </div>
        <div className="col-5"></div>
      </div>

      <div className="row mt-3 mb-3">
        <div className="col-5"></div>

        <button className="boton_roles col-1 border rounded border border-3 p-3">
          <div>
            <Icon_clasificadora
              width={100}
              onClick={() => {
                actions.selectionRoles("clasificadora");
              }}
            />
          </div>
        </button>

        <div className="col-1 d-flex align-items-center p-3">
          <h1>Clasificadora</h1>
        </div>
        <div className="col-5"></div>
      </div>

      <div className="row mt-3 mb-3">
        <div className="col-5"></div>

        <button className="boton_roles col-1 border rounded border border-3 p-3">
          <div>
            <Icon_encargado
              width={100}
              onClick={() => {
                actions.selectionRoles("encargado");
              }}
            />
          </div>
        </button>

        <div className="col-1 d-flex align-items-center p-3">
          <h1>Encargado</h1>
        </div>
        <div className="col-5"></div>
      </div>
    </div>
  );
};
