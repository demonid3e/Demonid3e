
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

const text = "Hello World";

// react element:
const elem = <h2>Hello World</h2>;

// you can use React syntaxis - 3 arguments: "element", "element class or null if none", "content of element"
const elem = React.createElement(
  "h2",
  { className: "greetings" },
  "Hello World"
);

// for ^  Virtual DOM does this:

const element = {
  type: "h2",
  props: {
    className: "greetings",
    children: "Hello world"
  }
};

//
// cant put objects
// array will concatinate
// when creating multilined code need to add ()
// must have 1 div for all children
const anotherElem = (
  <div>
    <h2>Text: {text}</h2>
    <input type="text" />
    {/* 
      css classes must be written in camelCase
      instead of "class" need to use "className"
      cant use "for" need to use "htmlFor"
      
    */}
    <label htmlFor=""></label>
    <button tabIndex={0}>Test</button>
  </div>
);

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

  anotherElem,

  document.getElementById("root")