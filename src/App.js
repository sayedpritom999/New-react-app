//**22-9 Create multiple components from an array of objects

  // import React, { useState, useEffect } from 'react';
  // import logo from './logo.svg';
  // import './App.css';

  // function App() {
  //   const products = [
  //       {name: 'PhotoShop', price: '$90.99'},
  //       {name: 'Illustrator', price: '60.99'},
  //       {name: 'PDF Reader', price: '$6.99'},
  //       {name: 'Premier EL', price: '$12.99'}
  //   ];

  //     return (
  //       <div className="App">
  //         <header className="App-header">
  //           <img src={logo} className="App-logo" alt="logo" />
  //               {
  //                 products.map(pd => <Products product = {pd}></Products>)
  //               }
  //         </header>
  //       </div>
  //     );
  // }
  // function Products (props) {
  //   const productStyle = {
  //     border: '1px solid gray',
  //     backgroundColor: 'lightgray',
  //     borderRadius: '5px',
  //     float: 'left',
  //     height: '200px',
  //     width: '200px',
  //     margin: '10px'

  //   }
  //   const {name, price} = props.product;
  //   return (
  //     <div style = {productStyle}>
  //       <h4>{name}</h4>
  //       <h3>{price}</h3>
  //       <button>Buy Now</button>
  //     </div>
  //   )
  // }

  // export default App;



//**22-10 Introduction to Component state
//**22-11 Component state hook and set state method


// import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
  
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//               <Counter></Counter>
//         </header>
//       </div>
//     );
// }

// function Counter () {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onMouseMove={() => setCount(count + 1)}>Increase</button>
//       <button onClick = {() => setCount(count -1)}>Decrease</button>
//     </div>
//   )
// }

// export default App;

//**22-12 Set and update state and set event handler in React */



import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
              <Users></Users>
        </header>
      </div>
    );
}



function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
    console.log(users)
  }, [])
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}, {user.phone}</li>)
        }
      </ul>
    </div>
  )
}

}

export default App;



















// import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   const names = [ 'Python',  'PHP', 'JS', 'React'];
  
//   const products = [
//       {name: 'PhotoShop', price: '$90.99'},
//       {name: 'Illustrator', price: '60.99'},
//       {name: 'PDF Reader', price: '$6.99'},
//       {name: 'Premier EL', price: '$12.99'}
//   ]

//   const programmingLanguages = [
//     {name: 'Java', useCase: 'Android'},
//     {name: 'Python', useCase: 'Data Science'},
//     {name: 'PHP', useCase: 'Web-backend'},
//     {name: 'Javascript', useCase: 'Web-frontend'},
//     {name: 'Swift', useCase: 'Iphone'}
//   ]
//   // const productNames = products.map(product => product.name);

//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <Name name = {names[0]} platform = 'DataScience'></Name>
//           <Name name ={names[1]} platform = 'WebBackEnd'></Name>
//           <Name name ={names[2]} platform = 'WebFrontEnd'></Name>
//           <Name name ={names[3]} platform = 'Web & App'></Name>


//           <Counter></Counter>
//           <Users></Users>
//           {/* <ul style = {{color: 'red'}}>
//               {
//                 products.map(pd => <Products product = {pd}></Products>)
//               }
//           </ul> */}

//           <Products product= {products[0]}></Products>
//           <Products product= {products[1]}></Products>
//           <Products product= {products[2]}></Products>
//           <Products product= {products[3]}></Products>


//           <ul>
//           {
//             programmingLanguages.map(lang => <Languages language = {lang}></Languages>)
//           }
//           </ul>
          
//         </header>
//       </div>
//     );
// }

// function Name(props) {
//   const style = {
//     border: '2px solid yellow',
//     backgroundColor: 'cyan',
//     margin: '10px',
//     width: '400px'
//   }
//   return (
//     <div style = {style}>
//       <h4>Name: {props.name}</h4>
//       <h6>UseCase: {props.platform}</h6>
//     </div>
//   )
// }

// function Counter () {
//   const [count, setCount] = useState(10);
//   // const handleIncrease = () => setCount(count + 1)
//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onMouseMove = {() => setCount(count + 1)}>Increase</button>
//       <button onClick = {() => setCount(count - 1)}>Decrease</button>
//     </div>
//   )
// }

// function Users() {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => setUsers(data));
//   }, [])
//   return (
//     <div>
//       <h3>Dynamic Users {users.length}</h3>
//       <ul>
//         {
//           console.log(users)
//         }
//       {
//        users.map(user => <li>{user.phone}</li>) 
//       }
//       </ul>
//     </div>
//   )
// }

// function Products (props) {
//   const productStyle = {
//     border: '1px solid gray',
//     backgroundColor: 'lightgray',
//     borderRadius: '5px',
//     float: 'left',
//     height: '200px',
//     width: '200px',
//     margin: '10px'

//   }
//   const {name, price} = props.product;
//   return (
//     <div style = {productStyle}>
//       <h4>{name}</h4>
//       <h3>{price}</h3>
//       <button>Buy Now</button>
//     </div>
//   )
// }

// function Languages (props) {
//   const style = {
//     border: '1px solid gray',
//     borderRadius: '5px',
//     backgroundColor: 'salmon',
//     color: 'white',
//     height: '200px',
//     width: '200px',
//     float: 'left',
//     margin: '10px'
//   }
//   const {name, useCase} = props.language;
//   return (
//     <div style = {style}>
//       <h4>{name}</h4>
//       <h2>{useCase}</h2>
//     </div>
//   )
// }

// export default App;
