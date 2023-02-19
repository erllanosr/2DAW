import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import BuenosDias from './componentes/BuenosDias';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavLink to='/'>Página principal</NavLink>

        <Routes>
          <Route path='/' element={
            <h1>Probando Router</h1>
          }></Route>
          <Route path='/:nombre' element={<BuenosDias></BuenosDias>}></Route>
          <Route path='*' element={
            <h2>ERROR 404</h2>
          }></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
