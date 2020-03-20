import React from 'react';

function Header(props){
  return(
    <div className="Header">
      <p>Hola! El prop recibido es: {props.myAgeAsProps}</p>
    </div>
  )
}

export default Header;


// import './Header.css';

// import React, { Component } from 'react';


// class Header extends Component{


//   render(){
//     return(
//       <div className="Header">
//         <p>Yo soy el header</p>
//       </div>
//     )
//   }

// }

// export default Header;