import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import ComponenteClase from "./componentes";
import { ComponenteFuncional, ComponenteFlecha } from "./componentes";

// app es un componente porque tiene metodo return- jsx mescla JS Y HTML
import React from "react";
function App() {
  let nombre = "pepito perez";
  let n1 = 20;
  let n2 = 30;
  return (
    <>
      <ComponenteClase />
      <ComponenteFlecha />
      <ComponenteFuncional />
    </>
  );
}

//return  con () es componete
function suma(n1, n2) {
  return n1 + n2;
}

export default App;
