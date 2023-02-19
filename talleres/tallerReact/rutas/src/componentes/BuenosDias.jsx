import React from "react";
import { useParams } from "react-router-dom";

function BuenosDias() {

  const nombre = useParams();

  return(
    <h1>Buenos días, {nombre.nombre}</h1>
  );
}

export default BuenosDias;