import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { DatePicker } from "@material-ui/pickers";


export const Encargado = () => {
  const { store, actions } = useContext(Context);
  const [resultJoin, setResultJoin] = useState([]);
  const [resultMecanico, setResultMecanido] = useState([]);
  const [indice, setIndice] = useState([]);

  const [turno, setTurno] = useState("");
  const [fecha, setFecha] = useState("");
  const [enviarFormulario, setFormulario] = useState(false);
  const [role, setRole] = useState("");

  // ----------------- FECHA ----------------
   const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());
     let day =fechaSeleccionada.getDate();
     let month = fechaSeleccionada.getMonth() + 1;
     let year = fechaSeleccionada.getFullYear();
     let fechaConvertida = `${month}/${day}/${year}`;

  const sendDataEncargado = () => {
    fetch(process.env.BACKEND_URL + "/api/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        fecha: fecha,
        turno: turno,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        setResultJoin(result.clasificadora);
        setResultMecanido(result.mecanico);
      })
      .catch((error) => console.log("error", error));
  };

  console.log(`${month}/${day}/${year}`);
  console.log("esta es la fecha de Josgredh", fecha)
  return (
    <>
      <Formik
        initialValues={{
          turno: "",
          fecha: "",
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          console.log("Formulario enviado");
          setFormulario(true);
          setTurno(valores.turno);
          setFecha(valores.fecha);
          setTimeout(() => setFormulario(false), 5000);
        }}
      >
        {() => (
          <Form className="formulario">
            <div className="text-center p-2">
              <h3>------ Turnos ------</h3>
              <button
                onClick={(e) => {
                  setTurno(e.target.value), setRole("seleccionNocheTardeGris");
                }}
                type="button"
                name="turno"
                id="turno"
                value="mañana"
                className={
                  role === "seleccionNocheTardeGris"
                    ? "seleccionTurnoNocheVerde"
                    : "seleccionTurnoNocheGris"
                }
              >
                Mañana
              </button>

              <button
                onClick={(e) => {
                  setTurno(e.target.value), setRole("seleccionTurnoTardeGris");
                }}
                type="button"
                name="turno"
                id="turno"
                value="tarde"
                className={
                  role === "seleccionTurnoTardeGris"
                    ? "seleccionTurnoTardeVerde"
                    : "seleccionTurnoTardeGris"
                }
              >
                tarde
              </button>

              <button
                onClick={(e) => {
                  setTurno(e.target.value), setRole("seleccionTurnoMañanaGris");
                }}
                type="button"
                name="turno"
                id="turno"
                value="noche"
                className={
                  role === "seleccionTurnoMañanaGris"
                    ? "seleccionTurnoMañanaVerde"
                    : "seleccionTurnoMañanaGris"
                }
              >
                noche
              </button>
            </div>
            {/*----------------------FECHA MUI-------------------*/}

            <div className="p-2 text-center">
              <h3 htmlFor="fecha">----- Fecha -----</h3>
              <DatePicker
                id="fecha"
                name="fecha"
                onChange={setFechaSeleccionada}
                value={fechaSeleccionada}
                className="text-center"
              />
            </div>

            {/*----------------------FeNVIO DATOS-------------------*/}
            <div className="text-center botonSagrado"><button onClick={setFecha(fechaConvertida)}>Click</button></div>
            <div className="d-flex justify-content-center">
              <button type="submit" onClick={sendDataEncargado}>
                Enviar
              </button>
            </div>
            <div>
              {enviarFormulario && (
                <div
                  className="alert alert-success text-center"
                  width={200}
                  role="alert"
                >
                  Filtros aplicados con éxito!
                </div>
              )}
            </div>
          </Form>
        )}
      </Formik>

      <div className="container text-center p-5">
        <h1 className="p-2">Encargado</h1>
        <table className="table p-2">
          <thead className="tableColor">
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
            </tr>
          </thead>
          {resultJoin.map((item, index1) => (
            <>
              <tbody key={index1}>
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
                </tr>
              </tbody>
            </>
          ))}
        </table>
        <table className="table">
          <thead className="table tableColor">
            <tr>
              <th scope="col">Hora Mecanico</th>
              <th scope="col">Email Mecanico</th>
              <th scope="col">Problema Mecanico</th>
              <th scope="col">Accion Mecanico</th>
            </tr>
          </thead>
          {resultMecanico.map((item, index) => (
            <>
              <tbody key={index}>
                <tr>
                  <th scope="row">{item.horaDelMecanico}</th>
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
};
