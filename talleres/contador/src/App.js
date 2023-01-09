import "./App.css";
import Botones from "./componentes/Botones";
import Contador from "./componentes/Contador";
import { useState } from "react";

function App() {
  const [click, setclick] = useState(0);
  const incrementar = () => {
    setclick(click + 1);
  };
  // const reiniciar = () => {
  //   setclick(0);
  // };

  return (
    <div className="App">
      <Botones texto="Aumentar" reiniciar={true} metodo={incrementar} />
      <Botones texto="Reiniciar" reiniciar={false} metodo={reiniciar} />
      <Contador numero={click} />
    </div>
  );
}

export default App;
