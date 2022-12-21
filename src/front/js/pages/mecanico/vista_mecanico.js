import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";

import { Horas_mecanico } from "../../component/horas/horas_mecanico";
import "../../../styles/home.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Vista_mecanico = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  

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
         if (!result.done) {
           navigate("/");
         }
       })
       .catch((error) => console.log("error", error));
   }, []);







  return (
    <>
      <div>
        <div className="container  text-center">
          <div className="row align-items-start">
            <Horas_mecanico />
          </div>
        </div>
      </div>
    </>
  );
};
