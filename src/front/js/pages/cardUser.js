import React, { useContext, useState } from "react";



export const CardUser = ({user}) => {
  // --------------------- Use state para el input----------------------//
  const [serch, setSerch] = useState("")
  // --------------------- Setear el input ----------------------//
  const searcher = (e) => {
    setSerch(e.target.value);
    // console.log(e.target.value)
  };
  // --------------------- Metodo de filtrado-Buscador----------------------//

  let results = [];

  if (!serch) {
    results = user;
  } else {
    results = user.filter((dato) =>
      dato.role.toLowerCase().includes(serch.toLocaleLowerCase())
    );
  }

  if (!serch) {
    results = user;
  } else {
    results = user.filter((dato) =>
      dato.username.toLowerCase().includes(serch.toLocaleLowerCase())
    );
  }

  // --------------------- FILTRADO CHECKBOX ----------------------//
  const [dataFilter, setDataFilter] = useState([]);
    const [selectTurno, setSelectTurno] = useState({
      Mañana: false,
      Tarde: false,
      Noche: false,
    });

  const handleCheckbox = (e) => {
    setSelectTurno({
      ...selectTurno,
      [e.target.value]:e.target.checked,
    })

    if(e.target.checked){
      const resultTurno = user.filter(item => item.turno === e.target.value)

      setDataFilter([...dataFilter, ...resultTurno])

    } else {
       const resultTurno = dataFilter.filter((item) => item.turno !== e.target.value);

       setDataFilter([...resultTurno]);
    }
  };

  console.log(dataFilter)





  return (
    <div className="container text-center">
      {/*------------------------- HEADER ------------------------------*/}
      <header>
        <h2>Filtros con checkbox</h2>
      </header>
      {/*------------------------- FILTROS CHECKBOX ------------------------------*/}
      <div>
        <h3>Turno</h3>
        <div>
          <input
            onChange={handleCheckbox}
            type="checkbox"
            name="Turno"
            placeholder="Serch"
            value="mañana"
            id="mañana"
            className="me-3 p-2 m-3"
          />
          <label htmlFor="mañana">mañana</label>

          <input
            onChange={handleCheckbox}
            type="checkbox"
            name="Turno"
            placeholder="Serch"
            value="tarde"
            id="tarde"
            className="me-3 p-2 m-3"
          />
          <label htmlFor="tarde">tarde</label>

          <input
            onChange={handleCheckbox}
            type="checkbox"
            name="Turno"
            placeholder="Serch"
            value="noche"
            id="noche"
            className="me-3 p-2 m-3"
          />
          <label htmlFor="noche">Noche</label>
        </div>
      </div>

      {/*------------------------- BUSCADOR------------------------------*/}
      <div>
        <input
          type="text"
          placeholder="Serch"
          className="me-3 p-2 m-3 form-control"
          value={serch}
          onChange={searcher}
        />
      </div>

      {/*------------------------- contenedor USER- MAP ------------------------------*/}
      <main>
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
          {dataFilter.map((item, index) => (
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
