import CarritoElementos from './CarritoElementos';
import CarritoTotal from './CarritoTotal';
import PaypalCard from './PaypalCard';
import { useContext } from "react";
import { dataContext } from "./Controlador";
import './CarritoElementos.css';


function Cart() {
  const { carrito } = useContext(dataContext);

  // Condición ? "as" : ""
  return carrito.length > 0 ? (
    <div>
      <CarritoElementos></CarritoElementos>
      <CarritoTotal></CarritoTotal>
      <PaypalCard></PaypalCard>
    </div>
  ) : (
    <h2 id='total'>Carrito vacío</h2>
  );
}
export default Cart