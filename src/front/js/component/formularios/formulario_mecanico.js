import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const Formulario_mecanico = () => {
  const [enviarFormulario, setFormulario] = useState(false);
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
