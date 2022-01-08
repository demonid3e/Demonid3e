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

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

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
