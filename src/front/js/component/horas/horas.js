import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {store, actions} from "../../store/flux";
import { Context } from "../../store/appContext";

export const Horas = () => {
  const { store, actions } = useContext(Context);
  
  // const clickHora = (hora)=>{
  //   console.log(store.saveHora);
  // } 

  return store.horas.map((element, key) => {
    
    return (
      <>
        <div key={element.key}>
          <Link to={"/vista_login/vista_clasificadora/" + (key + 1)}>
            <button
              className="botonHoras"
              id={key}
              onClick={() => actions.selectionHora(key+1)}
            >
              {element}
            </button>
          </Link>
        </div>
      </>
    );
  });
};
