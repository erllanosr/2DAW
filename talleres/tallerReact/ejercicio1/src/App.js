import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Botones from "./componentes/Boton";
import Contador from "./componentes/Contador";
import { useState } from "react";

function App() {
  const [click, setclick] = useState(0);
  const incrementar = () => {
    setclick(click + 1);
  };
  const [click2, setclick2] = useState(0);
  const incrementar2 = () => {
    setclick2(click2 + 1);
  };
  const [click3, setclick3] = useState(0);
  const incrementar3 = () => {
    setclick3(click3 + 1);
  };
  const [click4, setclick4] = useState(0);
  const incrementar4 = () => {
    setclick4(click4 + 1);
  };
  const [click5, setclick5] = useState(0);
  const incrementar5 = () => {
    setclick5(click5 + 1);
  };
  const [click6, setclick6] = useState(0);
  const incrementar6 = () => {
    setclick6(click6 + 1);
  };
  return (
    <div className="App">
      <div class="container">
        <div className="row">
          <div class="col">
            <h2>Título del artículo</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, omnis. Odit ullam alias deserunt
              necessitatibus vero. Corporis esse necessitatibus iusto!
            </p>
            <Botones texto="Leer más" metodo={incrementar} />
            <Contador numero={click} />
          </div>
          <div class="col">
            <h2>Título del artículo</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius dignissimos blanditiis iure obcaecati!
              Facere quae omnis repellat, illum eveniet provident.
            </p>
            <Botones texto="Leer más" metodo={incrementar2} />
            <Contador numero={click2} />
          </div>
          <div class="col">
            <h2>Título del artículo</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius dignissimos blanditiis iure obcaecati!
              Facere quae omnis repellat, illum eveniet provident.
            </p>
            <Botones texto="Leer más" metodo={incrementar3} />
            <Contador numero={click3} />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <h2>Título del artículo</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius dignissimos blanditiis iure obcaecati!
              Facere quae omnis repellat, illum eveniet provident.
            </p>
            <Botones texto="Leer más" metodo={incrementar4} />
            <Contador numero={click4} />
          </div>
          <div class="col">
            <h2>Título del artículo</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius dignissimos blanditiis iure obcaecati!
              Facere quae omnis repellat, illum eveniet provident.
            </p>
            <Botones texto="Leer más" metodo={incrementar5} />
            <Contador numero={click5} />
          </div>
          <div class="col">
            <h2>Título del artículo</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius dignissimos blanditiis iure obcaecati!
              Facere quae omnis repellat, illum eveniet provident.
            </p>
            <Botones texto="Leer más" metodo={incrementar6} />
            <Contador numero={click6} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
