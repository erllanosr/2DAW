import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from './Greeting';
import Product, { Navbar } from './Product'
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Posts } from './Posts'

const root = ReactDOM.createRoot(document.getElementById('root'));
// const users = [
//   {
//     id: 1,
//     name: 'Michael G. Scott',
//     image: 'https://robohash.org/user1'
//   },
//   {
//     id: 2,
//     name: 'Dwight K. Schrute',
//     image: 'https://robohash.org/user2'
//   },
//   {
//     id: 3,
//     name: 'Jim Halpert',
//     image: 'https://robohash.org/user3'
//   }
// ]

// function Greeting() {
//   const user = {
//     firstName: 'Erick',
//     lastName: 'Llanos'
//   }
//   function add(x,y) {
//     return x + y;
//   }

//   // Convierte un objeto de JS en versión string
//   return(
//     <div>
//       <h1>{user.firstName}</h1>
//       <h2>{user.lastName}</h2>
//       <h3>{add(10,30)}</h3>
//     </div>
//   );
// }

// const handleChange = (e) => {
//   console.log(e.target.value);
// }
function Counter() {

  // El useState me devuelve dos arrays
  // Función que permite actualizarse, para que los datos cambien
  const [counter, setCounter] = useState(1)
  const [mensaje, setMensaje] = useState('')

  useEffect(() => {
    console.log('render');
  }, []) //Vas a ejecutar el useEffect pero solo una vez?

  return (
    <div>
      <input onChange={e =>setMensaje(e.target.value)}/>
      <button onClick={()=> {
        alert('El mensaje es: ' + mensaje)
      }}>Save</button>

      <hr/>
      <h1>Counter: {counter}</h1>
      <button onClick={() => {
        setCounter(counter+1)
      }}>Sumar</button>
      
      <button onClick={()=>{
        setCounter(counter - 1)
      }}>Restar</button>

      <button onClick={()=> {
        setCounter(10)
      }}>Reiniciar</button>
    </div>
  )
  
}

root.render(
  <>
    <Counter></Counter>


    {/* Recorrer con map */}
    {/* {users.map((user, index) => {
      return (
        <div key={index}>
          <h1>{user.name}</h1>
          <img src={user.image} alt="" />
        </div>
      )
    })} */}


    {/* <Posts></Posts> */}

    {/* <TaskCard ready={true}></TaskCard>
  <Saludar></Saludar>
  <Button text="Saludar"></Button>

  <form onSubmit={(e)=> {
    e.preventDefault()
    alert('enviado');
  }}>
    <h1>Registro de usuarios</h1>
    <button>Send</button>
  </form>
  <input id="hola" onChange={handleChange} onDoubleClick={() => console.log("double click")}/> */}

    {/* <input id="hola" onChange={function(e) {
    console.log(e.target.value + '...');
  }}/> */}

    {/* <Button text="Click me..." />
    <Button text="Pay"/>
    <Button text='' name='Erick'/> */}
    {/* <UserCard name="Erick Llanos"
      amount={3000}
      married={true}
      points={[99, 33.3, 22.2]}
      address={{street: '123 Main Street',city: 'New York'}}
      greet = { function () { alert('HELLO') }}
      />
    <UserCard name="Alejandra Choque"
      amount={5000}
      married={false}
      points={[10, 20]}
      address={{ street: 'Av. El Triunfo', city: 'VMT' }}
      greet={function () { alert('HELLO') }}
    /> */}
    {/* <Greeting title="Hola Mundo" name="Erick"></Greeting>
    <Greeting title="Hola React" name="Joel"></Greeting>
    <Greeting title="Hola JSX"></Greeting>
    <Greeting title="Hola JavaScript"></Greeting>
    <Greeting title="Hola Erick"></Greeting>
    <Hola></Hola>
    <Product></Product>
    <Navbar></Navbar> */}
  </>

);