import React, { StrictMode } from "react";
import logo from "./logo.svg";
import { Component } from "react";
import "./App.css";

const Header = () => {
  return <h2>Hello World!</h2>;
};

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


class WhoAmI extends Component {
    constructor (props){
      super(props);
      this.state = {
        years: 27,
        text: "fsdfdf"
      }
    }
    nextYear = () => {
      console.log("+++");
      // watch 1
      this.setState(state => ({
        years: state.years + 1
      }))
    //  this.setState({
        // is incorect way   // years: ++this.state.years
        // correct way    years: this.state.years + 1 
        // correct way is based on previous state, if previous state is wrong due to lag,
        // it will give bugs  to prevent  use "watch1" whith different syntaxys in callback function

     //  })
    }



    render() {
      const {name, surname, link} = this.props;
      return (
          <div>
            <button onClick={this.nextYear}>{this.state.text}</button>
            
            <h1>
            My name is {name} , surname - {surname}, age - {this.state.years}
           </h1>
            <a href={link}>My Profile</a>
          </div>
      );
 }
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

    </div>
  );
}
export { Header };
export default App;
