import React, { useContext, useEffect, useState } from "react";
import { MdPendingActions } from "react-icons/md";
import Icon_mecanico from "../component/icons/icon_mecanico";
import { Context } from "../store/appContext";

export const Mecanico = () => {
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
    <div className="container-fluid text-center p-5">
      {/*------------------------- HEADER ------------------------------*/}
      <header>
        <h1 className="p-2">
          <Icon_mecanico width={50} />
          {"  "}Mecánico
        </h1>
      </header>

      {/*------------------------- MAIN ------------------------------*/}
      <div>
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
                  Problema
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
      </div>

      <main>
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
      </main>
    </div>
  );
};
