import {VscBug} from 'react-icons/vsc'
export const Posts = () => {
  return <button onClick={() => {
    // PROMESAS EN JS
    fetch('jsonplaceholder.typicode.com/posts')
      .then(response => response.json()) //CONVERTIRLO A JSON
      .then(data => console.log(data))
      .catch(error => console.error(error))
  }}>
    <VscBug></VscBug>
    Traer Datos
  </button>
}