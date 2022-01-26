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
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: "+++",
      position: "",
    };
    // we binding  "own" "this", to EACH new class we make

    this.nextYear = this.nextYear.bind(this);
  }

  // context of this will be lost if used function this way, we must use bind to keep track
  // of "this", on event listeners or you can you arrow function which will work without bind
  nextYear() {
    console.log("+++");
    // watch 1
    this.setState((state) => ({
      years: state.years + 1,
    }));
    //  this.setState({
    // is incorect way   // years: ++this.state.years
    // correct way    years: this.state.years + 1
    // correct way is based on previous state, if previous state is wrong due to lag,
    // it will give bugs  to prevent  use "watch1" whith different syntaxys in callback function

    //  })
  }
  commitInputChanges = (e, color) => {
    console.log(color);
    this.setState({
      position: e.target.value,
    });
  };

  render() {
    const { name, surname, link } = this.props;
    const { position, years } = this.state;
    return (
      <div>
        <form>
          <span>Enter job title </span>
          {/* to pass arguments to event listener use anonymous function with (e) */}
          <input
            type="text"
            onChange={(e) => this.commitInputChanges(e, "some color")}
          />
        </form>
        {/* to keep track "this" you can use anonymous function
            <button onClick={() => this.nextYear()}>{this.state.text}</button>   */}
        <button onClick={this.nextYear}>{this.state.text}</button>

        <h1>
          My name is position - {position}
          {name} , surname - {surname}, age - {years},
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
