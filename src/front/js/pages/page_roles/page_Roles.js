import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import { Roles } from "../../component/roles/roles";
import "../../../styles/home.css";

export const Page_roles = () => {
  const { store, actions } = useContext(Context);
  const [mostrarComponente, setMostrarComponente] = useState(true);

  return (
       <div className="text-center">
            <div>
                <Roles />
            </div>

       
      </div>
  
  );
};
