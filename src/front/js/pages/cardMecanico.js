import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";


export const CardMecanico = () => {
     const { store, actions } = useContext(Context);
       useEffect(() => {
         actions.fetchUser();
         console.log("estoy llamando al fetch");
       }, []);

  return (
    <div className="container text-center p-5">
      <h1 className="p-2">Mecanico</h1>
      <table className="table">
        <thead className="table-success">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Id usuario</th>
            <th scope="col">Hora</th>
            <th scope="col">Fecha</th>
            <th scope="col">Problema</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>
        {store.mecanico.map((item, index) => (
          <tbody key={index}>
            <tr>
              <th scope="row">{item.id}</th>
              <td>{item.user_id}</td>
              <td>{item.horas}</td>
              <td>{item.fecha}</td>
              <td>{item.problema}</td>
              <td>{item.accion}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

