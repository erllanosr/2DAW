import { useState } from 'react'
import './assets/bootstrap.css'
import Navbar from './componentes/Navbar'
import ProductList from './componentes/ProductList'
import Home from './componentes/Home';
import Cart from './componentes/Cart';
import DataProvider from './componentes/Controlador';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
    <DataProvider>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/productos' element={<ProductList/>}></Route>
          <Route path='/carrito' element={<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
      </DataProvider>
    </div>
  )
}

export default App
