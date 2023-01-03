import React, { useContext, useState } from "react";



export const CardUser = ({user}) => {

  // --------------------- Use state para el input----------------------//
  const [serch, setSerch] = useState("");

  // --------------------- Setear el input ----------------------//
  const searcher = (e) => {
    setSerch(e.target.value);
    // console.log(e.target.value)
  }
  // --------------------- Metodo de filtrado ----------------------//

  let results = []

  if (!serch){
    results = user
  }
  else {
    results = user.filter((dato) =>
      dato.role.toLowerCase().includes(serch.toLocaleLowerCase())
    );
    
  }




  ;

  return (
    <div className="container text-center p-5">
      <div>
        <input
          type="text"
          placeholder="Serch"
          className="me-3 p-2 m-3 form-control"
          value={serch}
          onChange={searcher}
        />
      </div>

      <h1 className="p-2">Usuarios</h1>
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
        {results.map((item, index) => (
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
    </div>
  );
};
