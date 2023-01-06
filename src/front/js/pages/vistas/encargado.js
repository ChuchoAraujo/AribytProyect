import React, { useEffect, useContext} from "react";
import { Context } from "../../store/appContext";


export const Encargado = () => {

    const { store, actions } = useContext(Context);
    useEffect(() => {
      actions.fetchJoin();
    }, []);

    return (
        <>
    <div className="container text-center p-5">
      <h1 className="p-2">Encargado</h1>
      <table className="table">
      <thead className="table-success">
              <tr>
                <th scope="col">hora clasificadora</th>
                <th scope="col">Email Clasificadora</th>
                <th scope="col">Fecha</th>
                <th scope="col">Cajas</th>
                <th scope="col">Articulo</th>
                <th scope="col">Lote</th>
                <th scope="col">Jaulas</th>
                <th scope="col">Pedido</th>
                <th scope="col">Personal</th>
                <th scope="col">problema Clasificadora</th>
                <th scope="col">Accion Clasificadora</th>
                <th scope="col">Tiempo</th>
                <th scope="col">Velocidad</th>
                <th scope="col">Gramos</th>
                <th scope="col">Hora Mecanico</th>
                <th scope="col">Email Mecanico</th>
                <th scope="col">Problema Mecanico</th>
                <th scope="col">Accion Mecanico</th>
              </tr>
            </thead>
        {store.resultJoin.map((item, index) => (
            <>
            <tbody key={index}>
                  <tr>
                    <th scope="row">{item.horaClasificadora}</th>
                    <td>{item.usuarioClasificadora}</td>
                    <td>{item.fecha}</td>
                    <td>{item.cajas}</td>
                    <td>{item.articulo}</td>
                    <td>{item.lote}</td>
                    <td>{item.jaulas}</td>
                    <td>{item.pedido}</td>
                    <td>{item.personal}</td>
                    <td>{item.problemaClasificadora}</td>
                    <td>{item.accionClasificadora}</td>
                    <td>{item.tiempo}</td>
                    <td>{item.velocidad}</td>
                    <td>{item.gramos}</td>
                    <td>{item.horaDelMecanico}</td>
                    <td>{item.usuarioMecanico}</td>
                    <td>{item.problemaMecanico}</td>
                    <td>{item.accionMecanico}</td>
                  </tr>
                </tbody>
            </>
        ))}
      </table>
    </div>
        </>
      );
}