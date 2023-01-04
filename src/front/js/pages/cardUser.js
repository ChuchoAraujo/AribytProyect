import React, { useContext, useState } from "react";
import Icon_encargado from "../component/icons/icon_encargado";

export const CardUser = ({ user }) => {
  // --------------------- Use state para el input----------------------//
  const [serch, setSerch] = useState("");
  // --------------------- Setear el input ----------------------//
  const searcher = (e) => {
    setSerch(e.target.value);
    // console.log(e.target.value)
  };
  // --------------------- Metodo de filtrado-Buscador----------------------//

  let results = [];

  // if (!serch) {
  //   results = [];
  // } else {
  //   results = user.filter((dato) =>
  //     dato.email.toLowerCase().includes(serch.toLocaleLowerCase())
  //   );
  // }

  // --------------------- FILTRADO CHECKBOX ----------------------//
  const [dataFilter, setDataFilter] = useState([]);
  const [selectTurno, setSelectTurno] = useState({
    Mañana: false,
    Tarde: false,
    Noche: false,
  });

  const [selectRole, setSelectRole] = useState({
    Clasificadora: false,
    Mecanico: false,
    Encargado: false,
  });
  // --------------------- FUNCION OBTENER VALUE ----------------------//
  const handleCheckboxTurno = (e) => {
    setSelectTurno({
      ...selectTurno,
      [e.target.value]: e.target.checked,
    });
    
    //------ CHECKBOX TURNO
    if (e.target.checked) {
      const resultTurno = user.filter((item) => item.turno === e.target.value);

      setDataFilter([...dataFilter, ...resultTurno]);
    } else {
      const resultTurno = dataFilter.filter(
        (item) => item.turno !== e.target.value
      );

      setDataFilter([...resultTurno]);
    }
  };
  console.log(dataFilter);


   const handleCheckboxRole = (e) => {
     setSelectRole({
       ...selectRole,
       [e.target.value]: e.target.checked,
     });

     //------ CHECKBOX ROLE
     if (e.target.checked) {
       const resultRole = user.filter((item) => item.role === e.target.value);

       setDataFilter([...dataFilter, ...resultRole]);
     } else {
       const resultRole = dataFilter.filter(
         (item) => item.role !== e.target.value
       );

       setDataFilter([...resultRole]);
     }
   };
   console.log(dataFilter);





  return (
    <div className="container-fluid row text-center">
      <header>
        <h1 className="text-center p-5">
          {" "}
          <Icon_encargado width={70} />
          {"   "}Encargado
        </h1>
      </header>
      <div className="col-1"></div>
      <div className="col-3">
        {/*------------------------- HEADER ------------------------------*/}
        <titulo>
          <h2 className="p-2">Selecciona el filtro</h2>
        </titulo>

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

        {/*------------------------- FILTROS CHECKBOX TURNO ------------------------------*/}
        <div className="p-2">
          <h3>Turno</h3>
          <div>
            <input
              onChange={handleCheckboxTurno}
              type="checkbox"
              name="Turno"
              placeholder="Serch"
              value="mañana"
              id="mañana"
              className="me-3 p-2 m-3"
            />
            <label htmlFor="mañana">mañana</label>

            <input
              onChange={handleCheckboxTurno}
              type="checkbox"
              name="Turno"
              placeholder="Serch"
              value="tarde"
              id="tarde"
              className="me-3 p-2 m-3"
            />
            <label htmlFor="tarde">tarde</label>

            <input
              onChange={handleCheckboxTurno}
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

        {/*------------------------- FILTROS CHECKBOX TURNO ------------------------------*/}
        <div>
          <h3>Role</h3>
          <div>
            <input
              onChange={handleCheckboxRole}
              type="checkbox"
              name="Role"
              placeholder="Serch"
              value="clasificadora"
              id="clasificadora"
              className="me-3 p-2 m-3"
            />
            <label htmlFor="mañana">Clasificadora</label>

            <input
              onChange={handleCheckboxRole}
              type="checkbox"
              name="Role"
              placeholder="Serch"
              value="mecanico"
              id="mecanico"
              className="me-3 p-2 m-3"
            />
            <label htmlFor="tarde">Mecánico</label>

            <input
              onChange={handleCheckboxRole}
              type="checkbox"
              name="Role"
              placeholder="Serch"
              value="encargado"
              id="encargado"
              className="me-3 p-2 m-3"
            />
            <label htmlFor="noche">Encargado</label>
          </div>
        </div>
      </div>

      {/*------------------------- contenedor USER- MAP ------------------------------*/}
      <div className="col-7">
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
            {dataFilter
              .filter(
                (el) =>
                  el.email.toLowerCase().includes(serch.toLocaleLowerCase()) ||
                  el.username.toLowerCase().includes(serch.toLocaleLowerCase()) ||
                  el.role.toLowerCase().includes(serch.toLocaleLowerCase()) ||
                  el.turno.toLowerCase().includes(serch.toLocaleLowerCase())
              )
              .map((item, index) => (
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
      <div className="col-1"></div>
    </div>
  );
};
