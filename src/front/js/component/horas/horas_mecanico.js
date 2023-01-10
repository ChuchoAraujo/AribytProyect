import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {store, actions} from "../../store/flux";
import { Context } from "../../store/appContext";

export const Horas_mecanico = () => {
  const { store, actions } = useContext(Context);


  return store.horas.map((element, key) => {
    return (
      <>
        <div className="mt-2">
          <Link to={"/vista_login/vista_mecanico/" + (key + 1)}>
            <button
              className="btn btn-secondary"
              style={{ width: "200px" }}
              id={key}
              onClick={() => actions.selectionHoraMec(key+1)}
            >
              {element}
            </button>
          </Link>
        </div>
      </>
    );
  });
};
