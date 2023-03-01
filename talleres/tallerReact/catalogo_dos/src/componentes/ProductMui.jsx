import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useContext } from "react";
import { dataContext } from "./Controlador";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default function MediaCard() {
  const { data, carrito, setCarrito } = useContext(dataContext);

  const comprarProductos = (product) => {
    console.log(product);
    setCarrito([...carrito, product]); // copiamos un array de mi carrito para agregarlo
  }

  return data.map((product) => {
  return (
    <Card sx={{ maxWidth: 350 }} key={product.id}>
      <CardMedia react-tasks-application sx={{ height: 250 }}
        image={product.img}
        title="Pink Floyd"
        alt="img-product-card"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.artista}
          <br />
          {product.descripcion}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Typography gutterBottom component="div">
          {product.precio} €
        </Typography>
        <Button size="small" onClick={()=>comprarProductos(product)}>Agregar al carrito</Button>
      </CardActions>
    </Card>
  )
  })
}