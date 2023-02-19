export function Greeting({ title, name = "User" }) {
  console.log(title, name);
  // function add(x, y) {
  //   return x + y;
  // }
  // return <h1>{add(10, 30)}</h1>
  return <h1>{title}, dice {name}</h1>
}
export function UserCard({ name, amount, married, address, greet }) {
  console.log(name, amount, married, address, greet);
  return (
    <div>
      <h1>{name}</h1>
      <p>💶{amount}</p>
      <p>{married ? 'married' : 'single'}</p>
      <ul>
        <li>City: {address.city}</li>
        <li>Address: {address.street}</li>
      </ul>
    </div>
  );
}
