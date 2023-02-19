import './App.css';
import Producto from './componentes/Producto';
import React, { useState } from 'react';
import pinkFloyd from './assets/pinkFloyd.jpg'


function App() {

  const [precioTotalAlbum, setPrecioTotalAlbum] = useState(0);
  const [precioTotalCD, setPrecioTotalCD] = useState(0);
  const [precioTotalCamiseta, setPrecioTotalCamiseta] = useState(0);

  return (
    <div className="App">
      <div className="row">
        <div className="col">
          <img src={pinkFloyd} alt="Pink Floyd" />
          <Producto nombre="Álbum" precio={5} setPrecioTotal={setPrecioTotalAlbum}></Producto>
          <h1>Total a pagar:{precioTotalAlbum}€</h1>
        </div>
        <div className="col">
          <Producto nombre="CD" precio={5} setPrecioTotal={setPrecioTotalCD}></Producto>
          <h1>Total a pagar:{precioTotalCD}€</h1>
        </div>
        <div className="col">
          <Producto nombre="Camisetas" precio={10} setPrecioTotal={setPrecioTotalCamiseta}></Producto>
          <h1>Total a pagar:{precioTotalCamiseta}€</h1>
        </div>
      </div>
    </div>
  );
}
export default App;
