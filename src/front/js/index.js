//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import esLocale from "date-fns/locale/es"
import { alpha } from "@material-ui/core/styles";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(
  <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale} alpha={alpha}>
    <Layout />
  </MuiPickersUtilsProvider>,
  document.querySelector("#app")
);
