import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const Formulario_clasificadora = () => {
  const [enviarFormulario, setFormulario] = useState(false);
  
  const [cajas, setCajas] = useState("");
  const [articulo, setArticulo] = useState("");
  const [lote, setLote] = useState("");
  const [jaulas, setJaulas] = useState("");
  const [pedido, setPedido] = useState("");
  const [personal, setPersonal] = useState("");
  const [problema, setProblema] = useState("");
  const [accion, setAccion] = useState("");
  const [tiempo, setTiempo] = useState("");
  const [velocidad, setVelocidad] = useState("");
  const [gramos, setGramos] = useState("");
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();

// ---------------------------- LLAMADA DEL POST / CLASIFICADORA----------------------------------------------------
  const send = () => {
    fetch(process.env.BACKEND_URL + "/api/clasificadora", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        "user_id":"1",
        "cajas": cajas,
        "articulo": articulo,
        "lote": lote,
        "jaulas": jaulas,
        "pedido": pedido,
        "personal": personal,
        "problema": problema,
        "accion": accion,
        "tiempo": tiempo,
        "velocidad": velocidad,
        "gramos": gramos,
        "fecha":`${month}/${day}/${year}`,
        "horas":"1",
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
          cajas: "",
          articulo: "",
          lote: "",
          jaulas: "",
          pedido: "",
          personal: "",
          problema: "",
          accion: "",
          tiempo: "",
          velocidad: "",
          gramos: "",
        }}
        validate={(valores) => {
          let errores = {};

          // Validacion cajas
          if (!valores.cajas) {
            errores.cajas = "Por favor ingresa las cajas por hora";
          } else if (!/^[0-9]+$/.test(valores.cajas)) {
            errores.cajas = "Solo puede contener Numeros enteros";
          }
          // Validacion articulo
          if (!valores.articulo) {
            errores.articulo = "Por favor ingresa un articulo";
          }
          //validacion Lote
          /* if(!valores.lote){
                                    errores.lote = 'Por favor ingresa un lote'
                                }*/

          //validacion Jaulas
          //validacion Pedido
          //validacion personal
          //validacion problema
          //validacion accion
          //valicion tiempo
          //validacion velocidad
          if (!valores.velocidad) {
            errores.velocidad = "Por favor ingresa la velocidad";
          } else if (!/^\d*\.\d+$/.test(valores.velocidad)) {
            errores.velocidad = "Solo puede contener Numeros";
          }
          //validacion gramos
          if (!valores.gramos) {
            errores.gramos = "Por favor ingresa los gramos de la cola";
          } else if (!/^\d*\.\d+$/.test(valores.gramos)) {
            errores.gramos = "Solo puede contener Numeros";
          }
          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          console.log("Formulario enviado");
          setFormulario(true);
          setCajas(valores.cajas);
          setArticulo(valores.articulo);
          setLote(valores.lote);
          setJaulas(valores.jaulas);
          setPedido(valores.pedido);
          setPersonal(valores.personal);
          setProblema(valores.problema);
          setAccion(valores.accion);
          setTiempo(valores.tiempo);
          setVelocidad(valores.velocidad);
          setGramos(valores.gramos);
          console.log(valores)
          setTimeout(() => setFormulario(false), 5000);
        }}
      >
        {({ errors }) => (
          <Form className="formulario">
            <div>
              <label htmlFor="cajas">Cajas</label>
              <Field
                type="text"
                id="cajas"
                name="cajas"
                placeholder="Número de cajas"
                onKeyUp={(e) => setCajas(e.target.value)}
              />
              <ErrorMessage
                name="cajas"
                component={() => <div className="error">{errors.cajas}</div>}
              />
            </div>
            <div>
              <label htmlFor="articulo">Artículo</label>
              <Field
                type="text"
                id="articulo"
                name="articulo"
                placeholder="Codigo de Articulo"
                onKeyUp={(e) => setArticulo(e.target.value)}
              />
              <ErrorMessage
                name="articulo"
                component={() => <div className="error">{errors.articulo}</div>}
              />
            </div>
            <div>
              <label htmlFor="lote">Lote</label>
              <Field
                type="text"
                id="lote"
                name="lote"
                placeholder="Numero Lote"
                onKeyUp={(e) => setLote(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="jaulas">Jaulas</label>
              <Field
                type="text"
                id="jaulas"
                name="jaulas"
                placeholder="Numero de Jaulas"
                onKeyUp={(e) => setJaulas(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="pedido">pedido</label>
              <Field
                type="text"
                id="pedido"
                name="pedido"
                placeholder="Numero de pedido"
                onKeyUp={(e) => setPedido(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="personal">personal</label>
              <Field
                as="textarea"
                id="personal"
                name="personal"
                placeholder="Personal en la maquina"
                onKeyUp={(e) => setPersonal(e.target.value)}
              />
            </div>
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
            <div>
              <label htmlFor="tiempo">tiempo</label>
              <Field
                type="number"
                id="tiempo"
                name="tiempo"
                placeholder="Tiempo parada"
                onKeyUp={(e) => setTiempo(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="velocidad">velocidad</label>
              <Field
                type="number"
                id="velocidad"
                name="velocidad"
                placeholder="Velocidad de la maquina"
                onKeyUp={(e) => setVelocidad(e.target.value)}
              />
              <ErrorMessage
                name="velocidad"
                component={() => (
                  <div className="error">{errors.velocidad}</div>
                )}
              />
            </div>
            <div>
              <label htmlFor="gramos">gramos</label>
              <Field
                type="number"
                id="gramos"
                name="gramos"
                placeholder="Gramos de la cola"
                onKeyUp={(e) => setGramos(e.target.value)}
              />
              <ErrorMessage
                name="gramos"
                component={() => <div className="error">{errors.gramos}</div>}
              />
            </div>
            <button type="submit" onClick={send}>
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
