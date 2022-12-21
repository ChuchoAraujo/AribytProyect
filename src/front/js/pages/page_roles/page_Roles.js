import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import { Roles } from "../../component/roles/roles";
import "../../../styles/home.css";

export const Page_roles = () => {
  const { store, actions } = useContext(Context);
  const [mostrarComponente, setMostrarComponente] = useState(true);

  return (
       <div className="text-center">
      {/*Con un estado adicional le dicen cuando mostrarse o no*/}
      <button className="btn-success" onClick={() => setMostrarComponente(!mostrarComponente)}>
        {/*Aqui solo cambio el texto de mi boton, para el ejemplo */}
        {mostrarComponente ? `Back` : `Next`}
      </button>
      <div className={mostrarComponente ? "show-element" : null}>
        {mostrarComponente && (
          <>
            <div className="row">
              
                <Roles />
             
            </div>
          </>
        )}
      </div>
    </div>   
  
  );
};
