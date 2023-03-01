import '../assets/bootstrap.css'
import '../componentes/Navbar.css'
import { NavLink } from 'react-router-dom';
import { BsFillCartFill } from "react-icons/bs";

function Navbar() {
  return (
    <nav id='navbar'>
      <h2><NavLink to='/home' className="navbar-brand">Phantom</NavLink></h2>
      <NavLink className="nav-link" to="/productos">Productos</NavLink>
      <ul>
        <li><NavLink className="nav-link" to="/carrito"><BsFillCartFill></BsFillCartFill>CARRITO</NavLink></li>
      </ul>
    </nav>
  )
}
export default Navbar