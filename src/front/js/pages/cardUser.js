import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icon_encargado from "../component/icons/icon_encargado";
import Icon_clasificadora from "../component/icons/icon_clasificadora";
import Icon_mecanico from "../component/icons/icon_mecanico";
import Icon_simbolo from "../component/icons/icon_simbolo";
import { Context } from "../store/appContext";

export const CardUser = () => {
   const { store, actions } = useContext(Context);
     useEffect(() => {
       actions.fetchUser();
       console.log("estoy llamando al fetch");
     }, []);

  // --------------------- Use state para el input----------------------//
  const [serch, setSerch] = useState("");
  // --------------------- Setear el input ----------------------//
  const searcher = (e) => {
    setSerch(e.target.value);
    // console.log(e.target.value)
  };

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
      const resultTurno = store.user.filter((item) => item.turno === e.target.value);

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
      const resultRole = store.user.filter((item) => item.role === e.target.value);

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
      {/*------------------------- HEADER ------------------------------*/}
      <header>
        <h1 className="text-center p-5">
          {" "}
          <Icon_encargado width={70} />
          {"   "}Encargado
        </h1>
      </header>
      <div className="col-3"></div> {/*------ COLUMNA VACIA -----*/}
      {/*------------------------- CONTAINER ROLE ------------------------------*/}
      <main className="col-6">
        <div>
          <h4>¿Qué área te gustaría ver?</h4>
          <Link to={"/vista_login/vista_encargado/clasificadora"}>
            <button className="botonAreas">
              <Icon_clasificadora className="iconsAreas" /> Clasificadora
            </button>
          </Link>

          <Link to={"/vista_login/vista_encargado/mecanico"}>
            <button className="botonAreas">
              <Icon_mecanico className="iconsAreas" /> Mecanico
            </button>
          </Link>

          <Link to={"/vista_login/vista_encargado/usuarios"}>
            <button className="botonAreas">
              <Icon_simbolo className="iconsAreas" /> Usuarios
            </button>
          </Link>
        </div>
        {/*------------------------- CONTAINER TURNO ------------------------------*/}
        <div className="containerTurno">
          <h4 className="p-2">------ Turno ------</h4>
          <div>
            <input
              onChange={handleCheckboxTurno}
              type="checkbox"
              name="Turno"
              placeholder="Serch"
              value="mañana"
              id="mañana"
              className="btn-check me-3 p-2 m-3"
            />
            <label className="btn btn-outline-success me-2" htmlFor="mañana">
              mañana
            </label>

            <input
              onChange={handleCheckboxTurno}
              type="checkbox"
              name="Turno"
              placeholder="Serch"
              value="tarde"
              id="tarde"
              className="btn-check me-3 p-2 m-3"
            />
            <label className="btn btn-outline-success me-2" htmlFor="tarde">
              tarde
            </label>

            <input
              onChange={handleCheckboxTurno}
              type="checkbox"
              name="Turno"
              placeholder="Serch"
              value="noche"
              id="noche"
              className="btn-check me-3 p-2 m-3"
            />
            <label className="btn btn-outline-success me-2" htmlFor="noche">
              Noche
            </label>
          </div>

          {/*------------------------- FECHA------------------------------*/}
          <div className="text-center">
            <h4 className="mt-2 p-2">------ Fecha ------</h4>
            <input
              type="text"
              placeholder="00/00/00"
              className="p-2 text-center"
              value={serch}
              onChange={searcher}
            />
          </div>

          {/*------------------------- CONTAINER FILTROS AVANZADOS ------------------------------*/}
          <div>
            <div>
              <h4 className="mt-2 p-2">Búsqueda avanzada</h4>
              <div>
                <input
                  onChange={handleCheckboxRole}
                  type="checkbox"
                  name="Role"
                  placeholder="Serch"
                  value="clasificadora"
                  id="clasificadora"
                  className="btn-check p-2"
                />
                <label
                  className="btn btn-outline-success m-2"
                  htmlFor="clasificadora"
                >
                  Clasificadora
                </label>

                <input
                  onChange={handleCheckboxRole}
                  type="checkbox"
                  name="Role"
                  placeholder="Serch"
                  value="mecanico"
                  id="mecanico"
                  className="btn-check p-2"
                />
                <label
                  className="btn btn-outline-success m-2"
                  htmlFor="mecanico"
                >
                  Mecánico
                </label>

                <input
                  onChange={handleCheckboxRole}
                  type="checkbox"
                  name="Role"
                  placeholder="Serch"
                  value="encargado"
                  id="encargado"
                  className="btn-check p-2 m-3"
                />
                <label
                  className="btn btn-outline-success m-2"
                  htmlFor="encargado"
                >
                  Encargado
                </label>

                <input
                  onChange={handleCheckboxRole}
                  type="checkbox"
                  name="Role"
                  placeholder="Serch"
                  value="mecanico"
                  id="mecanico"
                  className="btn-check p-2"
                />
                <label
                  className="btn btn-outline-success m-2"
                  htmlFor="mecanico"
                >
                  Cajas
                </label>

                <input
                  onChange={handleCheckboxRole}
                  type="checkbox"
                  name="Role"
                  placeholder="Serch"
                  value="mecanico"
                  id="mecanico"
                  className="btn-check p-2"
                />
                <label
                  className="btn btn-outline-success m-2"
                  htmlFor="mecanico"
                >
                  Articulo
                </label>

                <input
                  onChange={handleCheckboxRole}
                  type="checkbox"
                  name="Role"
                  placeholder="Serch"
                  value="mecanico"
                  id="mecanico"
                  className="btn-check p-2"
                />
                <label
                  className="btn btn-outline-success m-2"
                  htmlFor="mecanico"
                >
                  Lote
                </label>

                <input
                  onChange={handleCheckboxRole}
                  type="checkbox"
                  name="Role"
                  placeholder="Serch"
                  value="mecanico"
                  id="mecanico"
                  className="btn-check p-2"
                />
                <label
                  className="btn btn-outline-success m-2"
                  htmlFor="mecanico"
                >
                  Jaulas
                </label>

                <input
                  onChange={handleCheckboxRole}
                  type="checkbox"
                  name="Role"
                  placeholder="Serch"
                  value="mecanico"
                  id="mecanico"
                  className="btn-check p-2"
                />
                <label
                  className="btn btn-outline-success m-2"
                  htmlFor="mecanico"
                >
                  Acción
                </label>

                <input
                  onChange={handleCheckboxRole}
                  type="checkbox"
                  name="Role"
                  placeholder="Serch"
                  value="mecanico"
                  id="mecanico"
                  className="btn-check p-2"
                />
                <label
                  className="btn btn-outline-success m-2"
                  htmlFor="mecanico"
                >
                  Velocidad
                </label>

                <input
                  onChange={handleCheckboxRole}
                  type="checkbox"
                  name="Role"
                  placeholder="Serch"
                  value="mecanico"
                  id="mecanico"
                  className="btn-check p-2"
                />
                <label
                  className="btn btn-outline-success m-2"
                  htmlFor="mecanico"
                >
                  Pedido
                </label>

                <input
                  onChange={handleCheckboxRole}
                  type="checkbox"
                  name="Role"
                  placeholder="Serch"
                  value="mecanico"
                  id="mecanico"
                  className="btn-check p-2"
                />
                <label
                  className="btn btn-outline-success m-2"
                  htmlFor="mecanico"
                >
                  Pax
                </label>

                <input
                  onChange={handleCheckboxRole}
                  type="checkbox"
                  name="Role"
                  placeholder="Serch"
                  value="mecanico"
                  id="mecanico"
                  className="btn-check p-2"
                />
                <label
                  className="btn btn-outline-success m-2"
                  htmlFor="mecanico"
                >
                  Problema
                </label>

                <input
                  onChange={handleCheckboxRole}
                  type="checkbox"
                  name="Role"
                  placeholder="Serch"
                  value="mecanico"
                  id="mecanico"
                  className="btn-check p-2"
                />
                <label
                  className="btn btn-outline-success m-2"
                  htmlFor="mecanico"
                >
                  Tiempo
                </label>

                <input
                  onChange={handleCheckboxRole}
                  type="checkbox"
                  name="Role"
                  placeholder="Serch"
                  value="mecanico"
                  id="mecanico"
                  className="btn-check p-2"
                />
                <label
                  className="btn btn-outline-success m-2"
                  htmlFor="mecanico"
                >
                  Gramos
                </label>
                {/*------------------------- BUSCADOR------------------------------*/}
                <input
                  type="text"
                  placeholder="Serch"
                  className="mt-2 form-control"
                  value={serch}
                  onChange={searcher}
                />
              </div>
            </div>

            {/*------------------------- BUTTON------------------------------*/}
            <button className="btn btn-success p-2 m-3">Vista general</button>
          </div>
        </div>
      </main>
      {/*------ COLUMNA VACIA -----*/}
      <div className="col-3"></div>{" "}
      {/*------------------------- contenedor USER- MAP ------------------------------*/}
      <div>
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
                  el.username
                    .toLowerCase()
                    .includes(serch.toLocaleLowerCase()) ||
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
    </div>
  );
};
