import React, {Component, useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'

// class App extends Component {

  // state = {
  //   name: 'Jaime',
  //   dogs: ['Jordi', 'Maya'],
  //   infected: false,
  //   age: 25
  // }

//   render(){
//     return (
//       <div className="App">
//         <Header />
//         <h2>Hola {this.state.name} tu edad es {this.state.age}</h2>
//         <button onClick={()=>this.setState({name: 'Diego'})}>CAMBIAR NOMBRE</button>
//       </div>   
//     );    
//   }
// }

// export default App;

function App(){


  const [myHooksState, changeMyHooksState] = useState({
    name: 'Jaime',
    dogs: ['Jordi', 'Maya'],
    infected: false
  })

  const [myAge, changeMyAge] = useState(25)

  useEffect(()=>{
    console.log('Esto se activa solo cuando cambia myHooksState')
  }, [myHooksState])

  useEffect(()=>{
    console.log('Esto se activa solo cuando cambia la edad')
  }, [myAge])

  const checkName = ()=>{
    if(myHooksState.name !== 'Diego'){
      changeMyHooksState({...myHooksState, name: 'Diego'})
    }
  }

  return(
    <div className="App">
      <p>Hola {myHooksState.name} tu edad es {myAge}</p>
      <button onClick={()=>checkName()}>CAMBIAR NOMBRE</button>
      <button onClick={()=>changeMyAge(50)}>CHANGE AGE</button>
      <Header myAgeAsProps={myAge}/>
    </div>
  )
}


export default App;