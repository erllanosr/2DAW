import React, { useContext } from 'react'
import { dataContext } from '../componentes/Controlador';
import './CarritoElementos.css'

function CarritoElementos() {
  const { carrito } = useContext(dataContext);
  return carrito.map((product) => { // recorremos el carrito
    return (
      <div className='carrito' key={product.id}>
        {/* <ul>
          <li><img src={product.img} alt={product.artista} /></li>
          <li><h3 className='artista'>{product.artista}</h3></li>
          <li><h3 className='nombre'>{product.nombre}</h3></li>
          <li><h3 className='descripcion'>{product.descripcion}</h3></li>
          <li><h4 className='precio'>{product.precio}€</h4></li>
        </ul> */}
        <table className="table">
          <tbody>
            <tr key={product.id}>
              <th scope="row"><img src={product.img}/></th>
              <th scope="row">{product.id}</th>
              <td>{product.nombre}</td>
              <td>{product.artista}</td>
              <td>{product.descripcion}</td>
              <td>{product.precio}€</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  })
}
export default CarritoElementos