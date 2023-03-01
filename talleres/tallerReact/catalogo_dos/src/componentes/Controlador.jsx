import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const dataContext = createContext();

// Data provider
const DataProvider = ({children}) => {
  const [data, setData] = useState([]);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    axios("productos.json").then((res) => setData(res.data));
  }, [])

  return(
    //Valores dentro del proveedor
    <dataContext.Provider value={{data, carrito, setCarrito}}>
      {children}
    </dataContext.Provider>
  )
}
export default DataProvider