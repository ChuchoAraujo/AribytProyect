import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const Formulario_clasificadora = () => {
  const [enviarFormulario, setFormulario] = useState(false);

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
              />
            </div>
            <div>
              <label htmlFor="jaulas">Jaulas</label>
              <Field
                type="text"
                id="jaulas"
                name="jaluas"
                placeholder="Numero de Jaulas"
              />
            </div>
            <div>
              <label htmlFor="pedido">pedido</label>
              <Field
                type="text"
                id="pedido"
                name="pedido"
                placeholder="Numero de pedido"
              />
            </div>
            <div>
              <label htmlFor="jaulas">personal</label>
              <Field
                as="textarea"
                id="personal"
                name="personal"
                placeholder="Personal en la maquina"
              />
            </div>
            <div>
              <label htmlFor="problema">problema</label>
              <Field
                as="textarea"
                id="problema"
                name="problema"
                placeholder="Problemas ocurridos"
              />
            </div>
            <div>
              <label htmlFor="accion">accion</label>
              <Field
                as="textarea"
                id="accion"
                name="accion"
                placeholder="Solucion al problema o problemas"
              />
            </div>
            <div>
              <label htmlFor="tiempo">tiempo</label>
              <Field
                type="text"
                id="tiempo"
                name="tiempo"
                placeholder="Tiempo parada"
              />
            </div>
            <div>
              <label htmlFor="velocidad">velocidad</label>
              <Field
                type="velocidad"
                id="velocidad"
                name="velocidad"
                placeholder="Velocidad de la maquina"
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
                type="text"
                id="gramos"
                name="gramos"
                placeholder="Gramos de la cola"
              />
              <ErrorMessage
                name="gramos"
                component={() => <div className="error">{errors.gramos}</div>}
              />
            </div>
            <button type="submit">Enviar</button>
            {enviarFormulario && (
              <p className="exito">Formulario enviado con exito!</p>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};
