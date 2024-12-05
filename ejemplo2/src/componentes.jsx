// componente de clase
import React from "react";

class ComponenteClase extends React.Component {
  render() {
    return <h1>Hola desde clase</h1>;
  }
}

// componente funciona l
function ComponenteFuncional() {
  return <h1>Hola desde funcional </h1>;
}

// componente funciona l
function ComponenteFlecha() {
  return <h1>Hola desde flecha </h1>;
}

export default ComponenteClase;
export { ComponenteFuncional, ComponenteFlecha };
