import React, { useContext, useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { store } from "../../store/flux";
import { Context } from "../../store/appContext";

export const Formulario_mecanico = () => {
  const { store } = useContext(Context);
  const navigate = useNavigate();
  //REGISTRO INPUTS
   const [problema, setProblema] = useState("");
   const [accion, setAccion] = useState("");
  //ALERT ENVIO FORMULARIO
  const [enviarFormulario, setFormulario] = useState(false);
  //OBTENER FECHA Y HORA
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  var todayHora = new Date();
  var nowHora = todayHora.toLocaleTimeString("en-US");

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/private", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Muy bien !! ... Token encontrado", result);
        // if (!result.done) {
        //   navigate("/");
        // }
      })
      .catch((error) => console.log("error", error));
  }, []);

  const sendDataClasificadora = () => {
    fetch(process.env.BACKEND_URL + "/api/mecanico", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        "user_id": store.userId,
        "problema": problema,
        "accion": accion,
        "fecha": `${month}/${day}/${year}`,
        "horas": nowHora,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <Formik
        initialValues={{
          problema: "",
          accion: "",
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          console.log("Formulario enviado");
          setFormulario(true);
          setProblema(valores.problema);
          setAccion(valores.accion);
          setTimeout(() => setFormulario(false), 5000);
        }}
      >
        {() => (
          <Form className="formulario">
            <div>
              <label htmlFor="problema">problema</label>
              <Field
                as="textarea"
                id="problema"
                name="problema"
                placeholder="Problemas ocurridos"
                onKeyUp={(e) => setProblema(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="accion">accion</label>
              <Field
                as="textarea"
                id="accion"
                name="accion"
                placeholder="Solucion al problema o problemas"
                onKeyUp={(e) => setAccion(e.target.value)}
              />
            </div>

            <button type="submit" onClick={sendDataClasificadora}>
              Enviar
            </button>
            {enviarFormulario && (
              <p className="exito">Formulario enviado con exito!</p>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};
