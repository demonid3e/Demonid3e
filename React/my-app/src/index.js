import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Header } from "./App";
import {Button} from "./App";
import styled from "styled-components";


const BigButton = styled(Button)`
  margin: 0 auto;
  width: 245px;
  text-align: center;
`

// const text = "Hello World";

// react element:
// const elem = <h2>Hello World</h2>;

// you can use React syntaxis - 3 arguments: "element", "element class or null if none", "content of element"
// const elem = React.createElement(
//   "h2",
//   { className: "greetings" },
//   "Hello World"
// );

// for ^  Virtual DOM does this:

// const element = {
//   type: "h2",
//   props: {
//     className: "greetings",
//     children: "Hello world"
//   }
// };

//
// cant put objects
// array will concatinate
// when creating multilined code need to add ()
// must have 1 div for all children
// const anotherElem = (
//   <div>
//     <h2>Text: {text}</h2>
//     <input type="text" />
//     {/*
//       css classes must be written in camelCase
//       instead of "class" need to use "className"
//       cant use "for" need to use "htmlFor"

//     */}
//     <label htmlFor=""></label>
//     <button tabIndex={0}>Test</button>
//   </div>
// );

ReactDOM.render(
  <StrictMode>
    <App />
    <BigButton as="a">Send</BigButton>
  </StrictMode>,

  document.getElementById("root")
);
