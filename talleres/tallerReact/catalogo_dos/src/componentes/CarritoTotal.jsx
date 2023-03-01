import { useContext } from "react";
import { dataContext } from "./Controlador";
import './CarritoElementos.css';

function CarritoTotal() {
  const {carrito} = useContext(dataContext);

  // Acumulador y elemento
  const total = carrito.reduce((acc, el)=>acc + el.precio, 0);
  return (
    <div id="total">
      <h3>Total a pagar</h3>
      <p>{total} €</p>
    </div>
  )
}

export default CarritoTotal