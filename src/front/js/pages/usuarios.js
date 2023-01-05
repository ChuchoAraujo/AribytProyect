import React, { useContext, useEffect, useState } from "react";
import { MdPendingActions } from "react-icons/md";
import { Context } from "../store/appContext";

export const Usuarios = () => {
   const { store, actions } = useContext(Context);

   useEffect(()=> {
     actions.fetchUser();
     console.log("estoy llamando al fetch");
   }, [])



  return (
    <div className="container-fluid text-center p-5">
      {/*------------------------- HEADER ------------------------------*/}
      <header>
        <h1 className="p-2">Usuarios</h1>
      </header>

      {/*------------------------- MAIN ------------------------------*/}
      <div>
        <h2>¿Qué consulta deseas realizar?</h2>
        <div>
          <button className="butonUsuarios">
            Ver todos
          </button>
          <button className="butonUsuarios">Agrear</button>
          <button className="butonUsuarios">Editar</button>
          <button className="butonUsuarios">Eliminar</button>
        </div>
      </div>
      <main>
        {/*------------------------- BUSCADOR------------------------------*/}
        <input
          type="text"
          placeholder="Serch"
          className="mt-2 form-control m-3"
          // value={serch}
          // onChange={searcher}
        />
        <table className="table">
          <thead className="table-success">
            <tr>
              <th scope="col">Id usuario</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col">Turno</th>
            </tr>
          </thead>
          {store.user.map((item, index) => (
            <tbody key={index}>
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
                <td>{item.turno}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </main>
    </div>
  );
};
