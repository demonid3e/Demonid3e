import React, { StrictMode } from "react";
import logo from "./logo.svg";
import "./App.css";

const Header = () => {
  return <h2>Hello World!</h2>;
};

// const Field = () => {
//   const holder = "Enter here";
//   const styledField = {
//     width: "300px",
//   };

//   return <input type="text" placeholder={holder} style={styledField} />;
// };

function Btn() {
  const text = "Enter";
  const logged = false;
  return <button>{logged ? text : "Log in"} </button>;
}
class Field extends React.Component {
  render() {
    const holder = "Enter here";
    const styledField = {
      width: "300px",
    };
    return <input type="text" placeholder={holder} style={styledField} />;
  }
}

/// props
//cant modify Props without rerendering page
// can put anything as props
// can put object inside prop {{firstName: "Demon"}}
// can put "my name is {name()}"
// <WhoAmI name={() => {return "John"}} surname="Smyth" link="facebook.com" />

function WhoAmI({ name, surname, link }) {
  return (
    <div>
      <h1>
        My name is {name} , surname - {surname}
      </h1>
      <a href={link}>My Profile</a>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <WhoAmI name="John" surname="Smyth" link="facebook.com" />
      <WhoAmI name="Demon" surname="Demon" link="www.bbc.co.uk" />
      <StrictMode>
        <Header />
      </StrictMode>
      <Field />
      <Btn />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <p>
           Edit <code>src/App.js</code> and save to reload.
         </p>

       </header> */}
    </div>
  );
}
export { Header };
export default App;
