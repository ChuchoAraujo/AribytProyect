import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {store} from "../../store/flux";
import { Context } from "../../store/appContext";

export const Horas = () => {
  const { store } = useContext(Context);
  
  const setearHoras = (horas)=>{
    console.log(horas)
  } 

  return store.horas.map((element, key) => {
    
    return (
      <>

        <div className="mt-2" key={element.key}>
          <Link to={"/vista_login/vista_clasificadora/" + (key + 1) }>
            <button
              className="btn btn-secondary"
              style={{ width: "200px" }}
              id={key}
              onClick={setearHoras("hola")}
            >
              {element}
            </button>
          </Link>
        </div>
      </>
    );
  });
};
