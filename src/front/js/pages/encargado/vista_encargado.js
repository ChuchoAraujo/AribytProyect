import React, { useEffect, useState } from "react";
import { Horas } from "../../component/horas/horas";


import { useNavigate } from "react-router-dom";
import { CardUser } from "../cardUser";
import { CardClasificadora } from "../cardClasificadora";
import { CardMecanico } from "../cardMecanico";
import { Formulario_encargado } from "../../component/formularios/formulario_encargado";

export const Vista_encargado = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState([])
  const [clasificadora, setClasificadora] = useState([]);
  const [mecanico, setMecanico] = useState([]);

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
        if (!result.current_user) {
          navigate("/");
        }
      })
      .catch((error) => console.log("error", error));
  }, []);

    useEffect(() => {
       fetch(process.env.BACKEND_URL + "/api/encargado", {
         method: "GET",
         headers: {
           "Content-Type": "application/json",
           Authorization: "Bearer " + localStorage.getItem("token"),
         },
       })
         .then((response) => response.json())
         .then((result) => {
          setUser(result.user)
          setClasificadora(result.clasificadora)
          setMecanico(result.mecanico)
           console.log(result.user)
           console.log(result.clasificadora)
           console.log(result.mecanico);
         })
         .catch((error) => console.log("error", error));
    }, []);



  return (
    <>
      <div>
        <h1 className="text-center p-3">Encargado</h1>
        <Formulario_encargado/>
        <CardUser user={user} />
        <CardClasificadora clasificadora={clasificadora} />
        <CardMecanico mecanico={mecanico} />
      </div>
    </>
  );
};
