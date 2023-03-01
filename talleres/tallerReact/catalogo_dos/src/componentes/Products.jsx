import { useContext } from "react";
import { dataContext } from "./Controlador";
import '../componentes/Products.css'

const Products = () => {
  const { data } = useContext(dataContext); // TRAER DEL CONTEXT

  return data.map((product) => {
    return (
      <div className="card">
        <img src={product.img} alt="img-product-card" />
        <h3>{product.name}</h3>
        <h3>{product.artista}</h3>
        <h3>{product.descripcion}</h3>
        <h4>{product.precio}</h4>
        <button>Comprar</button>
      </div>
    )
  })
};

export default Products