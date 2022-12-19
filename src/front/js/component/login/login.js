import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const Login = () => {
  const [enviarFormulario, setFormulario] = useState(false);

  const acceso = () => {
    fetch(process.env.BACKEND_URL + "/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        "email": initialValues.email,
        "password": initialValues.password,
      
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        // if (result.token) {
        //   localStorage.setItem("token", result.token);
        //   navigate("/members");
        // } else {
        //   setError(result.msg);
        // }
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

hast aqui hiciste!!!!!!

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(valores) => {
          let errores = {};

          // Validacion cajas
          if (!valores.email) {
            errores.email = "Por favor ingresa un email";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.email
            )
          ) {
            errores.email =
              "El email solo puede contener letras, numeros, puntos, guiones y guión bajo";
          }

          if (!valores.password) {
            errores.password = "Por favor ingresa el password";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.password
            )
          ) {
            errores.password =
              "El email solo puede contener letras, numeros, puntos, guiones y guión bajo";
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
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" placeholder="Email" />
              <ErrorMessage
                name="email"
                component={() => <div className="error">{errors.email}</div>}
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
              <ErrorMessage
                name="password"
                component={() => <div className="error">{errors.password}</div>}
              />
            </div>

            <button type="submit" onClick={acceso}>
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