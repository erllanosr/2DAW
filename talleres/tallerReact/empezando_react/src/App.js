import logo from './logo.svg';
import './App.css';
// import Botones from './componentes/Botones'
import { useRef, useState } from 'react';

function App() {
  const cambios=[
    {
      magnitud: 'kg',
      cambio: 1000
    },
    {
      magnitud: 'dkg',
      cambio: 100
    },
    {
      magnitud: 'g',
      cambio: 1
    },
  ]

  const modificar=(e)=>{
    setGramos(e.target.value);
    setDkg(e.target.value*cambios[1].cambio);
    setKg(e.target.value*cambios[0].cambio);

  }
  // El useRef es para saber que va a estar en constante cambio
  const [gramos, setGramos] = useState(0);
  const [dkg, setDkg] = useState(0);
  const [kg, setKg] = useState(0);

  return (
    <div className="App">
      <label>{cambios[2].magnitud}:</label>
      <input type="number" value={gramos} onChange={modificar}/>

      <label>{cambios[1].magnitud}:</label>
      <input type="number" value={dkg} readOnly/>

      <label>{cambios[0].magnitud}:</label>
      <input type="number" value={kg} readOnly/>
    </div>
  );
}

export default App;
