import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'},
    {name: 'Premier EL', price: '$249.99'}
  ]
  const programmingLanguages = [
    {name: 'Java', useCase: 'Android'},
    {name: 'Python', useCase: 'Data Science'},
    {name: 'PHP', useCase: 'Web-backend'},
    {name: 'Javascript', useCase: 'Web-frontend'},
    {name: 'Swift', useCase: 'Iphone'}
  ]
  // const productNames = products.map(product => product.name);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter></Counter>
          <Users></Users>
          <ul>
              {
                products.map(pd => <Products product = {pd}></Products>)
              }
          </ul>
          {/* <Products product= {products[0]}></Products>
          <Products product= {products[1]}></Products>
          <Products product= {products[2]}></Products> */}

          <ul>
          {
            programmingLanguages.map(lang => <Languages language = {lang}></Languages>)
          }
          </ul>

        </header>
      </div>
    );
}


function Counter () {
  const [count, setCount] = useState(10);
  // const handleIncrease = () => setCount(count + 1)
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove = {() => setCount(count + 1)}>Increase</button>
      <button onClick = {() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h3>Dynamic Users {users.length}</h3>
      <ul>
        {
          console.log(users)
        }
      {
       users.map(user => <li>{user.phone}</li>) 
      }
      </ul>
    </div>
  )
}

function Products (props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'

  }
  const {name, price} = props.product;
  return (
    <div style = {productStyle}>
      <h4>{name}</h4>
      <h3>{price}</h3>
      <button>Buy Now</button>
    </div>
  )
}

function Languages (props) {
  const style = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'salmon',
    color: 'white',
    height: '200px',
    width: '200px',
    float: 'left',
    margin: '10px'
  }
  const {name, useCase} = props.language;
  return (
    <div style = {style}>
      <h4>{name}</h4>
      <h2>{useCase}</h2>
    </div>
  )
}

export default App;
