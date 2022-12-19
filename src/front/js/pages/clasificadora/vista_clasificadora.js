import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { Horas } from "../../component/horas/horas";
import "../../../styles/home.css";

export const Vista_clasificadora = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div>
        <div className="container  text-center">
          <div className="row align-items-start">
            <Horas />
          </div>
        </div>
      </div>
    </>
  );
};
