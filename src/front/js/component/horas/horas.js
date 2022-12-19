import React, { useState } from "react";
import { FormularioClasificadora } from "../formularios/formulario_clasificadora";
import { Link } from "react-router-dom";

export const Horas = () => {
  const [horas, setHoras] = useState(["1", "2", "3", "4", "5", "6", "7", "8"]);

  return horas.map((element, key) => {
    return (
      <>
        <div className="mt-2">
          <Link to={"/vista_clasificadora/" + (key + 1)}>
            <button
              className="btn btn-secondary"
              style={{ width: "200px" }}
              id={key}
            >
              {element}
            </button>
          </Link>
        </div>
      </>
    );
  });
};
