import React, { StrictMode } from "react";
import logo from "./logo.svg";
import { Component } from "react";
import styled from "styled-components";
import "./App.css";

// example of styled div
const EmpItem = styled.div`
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  a {
    display: block;
    margin: 10px 0 10px 0;
    color: black;
    color: ${props => props.active ? "orange" : "black"};
  }
  input {
    display: block;
    margin-top: 10px;
  }
`;


// instead of using h2 tag you can you styled h2 tag name NewHeader
const NewHeader = styled.h2`
  font-size: 22px;
`;

// same as above, just with button
export const Button = styled.button`
  display: block;
  padding: 5px 15px;
  background-color: gold;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadiw: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

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
      <EmpItem active="true">
        {/* to keep track "this" you can use anonymous function
            <button onClick={() => this.nextYear()}>{this.state.text}</button>   */}
        <Button onClick={this.nextYear}>{this.state.text}</Button>
        <NewHeader>
          My name is position - {position}
          {name} , surname - {surname}, age - {years},
        </NewHeader>

        <a href={link}>My Profile</a>
        <form>
          <span>Enter job title </span>
          {/* to pass arguments to event listener use anonymous function with (e) */}
          <input
            type="text"
            onChange={(e) => this.commitInputChanges(e, "some color")}
          />
        </form>
      </EmpItem>
    );
  }
}

const Wrapper = styled.div`
  width: 600px;
  margin: 80px auto 0 auto;
`;

function App() {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}
export { Header };
export default App;
