import React from "react";
import "../hojas-estilo/botones.css";

function botones({ texto, reiniciar, metodo }) {
  return (
    <button className={reiniciar ? "boton-incrementar" : "boton-reiniciar"} onClick={metodo}>
      {texto}
    </button>
  );
}

export default botones;
