import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../store/appContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";

export const Encargado = () => {
  const { store, actions } = useContext(Context);
  const [resultJoin, setResultJoin] = useState([]);
  const [resultMecanico, setResultMecanido] = useState([]);
  const [indice, setIndice] = useState([]);

  const [turno, setTurno] = useState("");
  const [fecha, setFecha] = useState("");
  const [enviarFormulario, setFormulario] = useState(false);

  const [colorTurno, setColorTurno] = useState("")
  const [role, setRole] = useState("");

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
        console.log("resultado " + resultJoin);
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <>
      <Formik
        initialValues={{
          turno: "",
          fecha: "",
        }}
        validate={(valores) => {
          let errores = {};

          // Validacion checkbox turno
          if (!valores.turno) {
            errores.turno = "Por favor selecciona un turno";
          }
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
            <div>------ Turnos ------</div>
            <div>
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
            {/* <div className="containerTurno">
              <label className="btn btn-outline-success me-2" htmlFor="turno">
                Mañana
              </label>
              <Field
                className="btn-check me-3 p-2 m-3"
                type="checkbox"
                id="turno"
                name="turno"
                value="mañana"
                placeholder="escriba el turno"
                onKeyUp={(e) => setTurno(e.target.value)}
              />
            </div> */}
            <div>
              <label htmlFor="fecha">----- Fecha -----</label>
              <Field
                type="text"
                id="fecha"
                name="fecha"
                placeholder="Escriba la fecha"
                onKeyUp={(e) => setFecha(e.target.value)}
              />
            </div>
            <button type="submit" onClick={sendDataEncargado}>
              Enviar
            </button>
            {enviarFormulario && (
              <p className="exito">Formulario enviado con exito!</p>
            )}
          </Form>
        )}
      </Formik>
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
          <thead className="table-success">
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
