import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Container_clasificadora } from "./pages/clasificadora/container_clasificadora";
import { Vista_clasificadora } from "./pages/clasificadora/vista_clasificadora";
import { Container_mecanico } from "./pages/mecanico/container_mecanico";
import { Vista_mecanico } from "./pages/mecanico/vista_mecanico";
import { Vista_encargado } from "./pages/encargado/vista_encargado";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route
              element={<Vista_clasificadora />}
              path="/vista_clasificadora"
            />
            <Route
              element={<Container_clasificadora />}
              path="/vista_clasificadora/:id"
            />
            <Route
              element={<Vista_mecanico />}
              path="/vista_mecanico"
            />
            <Route
              element={<Container_mecanico />}
              path="/vista_mecanico/:id"
            />
            <Route
              element={<Vista_encargado />}
              path="/vista_encargado"
            />

            <Route element={<Demo />} path="/demo" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
