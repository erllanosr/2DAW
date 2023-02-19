import React from "react"
import '../bootstrap.css'
import { useState } from "react";

function Producto({ nombre, precio, setPrecioTotal }) {
  const [cantidad, SetCantidad] = useState(0)
  const modificarCantidad = (e) => {
    SetCantidad(e.target.value)
  }

  const agregarCantidad = () => {
    setPrecioTotal((total) => total + precio * cantidad)
  }

  return (
    // <button className="btn btn-primary">Hola</button>
    <div className="container">
      <div className="row">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">{nombre}</h1>
            <p className="card-text">{precio}€</p>
          </div>
          <div className="card-footer">
            <input type="number" value={cantidad} onChange={modificarCantidad} />
            <button className="btn btn-primary" onClick={agregarCantidad}>Añadir al carrito</button>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Producto;