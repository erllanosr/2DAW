import React from "react";
import "../hojas-estilo/botones.css";

function botones({ texto, metodo }) {
  return (
    <button className={"boton-incrementar"} onClick={metodo}>
      {texto}
    </button>
  );
}

export default botones;
