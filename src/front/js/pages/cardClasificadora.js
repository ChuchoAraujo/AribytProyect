import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const CardClasificadora = () => {
  const { store, actions } = useContext(Context);
 

    useEffect(() => {
      actions.fetchUser();
      console.log("estoy llamando al fetch");
    }, []);

  return (
      <div className="container text-center p-5">
        <h1 className="p-2">Clasificadora</h1>
        <table className="table">
          <thead className="table-success">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Id usuario</th>
              <th scope="col">Hora</th>
              <th scope="col">Fecha</th>
              <th scope="col">Cajas</th>
              <th scope="col">Estela</th>
              <th scope="col">Gramos</th>
              <th scope="col">Jaulas</th>
              <th scope="col">Lote</th>
              <th scope="col">Pedido</th>
              <th scope="col">Personal</th>
              <th scope="col">Problema</th>
              <th scope="col">Accion</th>
              <th scope="col">Tiempo</th>
              <th scope="col">Velocidad</th>
            </tr>
          </thead>
          {store.clasificadora.map((item, index) => (
            <tbody key={index}>
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.user_id}</td>
                <td>{item.horas}</td>
                <td>{item.fecha}</td>
                <td>{item.cajas}</td>
                <td>{item.articulo}</td>
                <td>{item.gramos}</td>
                <td>{item.jaulas}</td>
                <td>{item.lote}</td>
                <td>{item.pedido}</td>
                <td>{item.personal}</td>
                <td>{item.problema}</td>
                <td>{item.accion}</td>
                <td>{item.tiempo}</td>
                <td>{item.velocidad}</td>
              </tr>
            </tbody>
          ))}
        </table>
    </div>
  );
};

