// instead of React.Components with destructurisation take out Components from react
// import { Component } from "react";
// importing css file for this js
import "./employees-list-item.css";

// new Class that extends React.Components
const EmployeesListItem = (props) => {
  // uses props as argument
  // constructor(props) {
  // uses props as arguments
  // super(props);
  // state object is used to control state
  //   this.state = {
  //     increase: false,
  //     promote: false,
  //   };
  // }
  // function toPromote
  // toPromote = () => {
  //   console.log("Promoted");
  //   this.setState(({ promote }) => ({
  //     promote: !promote,
  //   }));
  // };
  // function, using setState (where "this" is increase state) changes increase state to opposite state
  // onIncrease = () => {
  //   this.setState(({ increase }) => ({
  //     increase: !increase,
  //   }));
  // };
  // // render is method that used in React to make logic of component
  // render() {
  // take out name, salary from PROPS
  const { name, salary, onDelete, onToggleProp, increase, rise } = props;
  // take out INCREASE from STATE
  // const { increase, rise } = this.state;
  // creates a list fo classnames
  let classNames = "list-group-item d-flex justify-content-between";
  // of increase is true add increase string to classlist
  if (increase) {
    classNames += " increase";
  }

  if (rise) {
    classNames += " like";
  }

  // checkIncreas();
  // this where JSX renders the page
  return (
    // sets the classnames of LI to one from classNames variable
    <li className={classNames}>
      {/* click on this span will add new class like to classnames */}
      {/* the name will be: name that has been passed as PROP to this class when Component is called */}
      <span
        onClick={onToggleProp}
        data-toggle="rise"
        style={{ fontSize: 18 }}
        className="list-group-item-label"
      >
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        // default value will be SALARY which is passed as PROP when Component is called + "$"
        defaultValue={salary + "$"}
      />
      <div className="d-flex justify-content-center align-items-center like">
        {/* onClick - THIS class method onIncrease will be called */}
        <button
          type="button"
          onClick={onToggleProp}
          data-toggle="increase"
          className="btn-cookie btn-sm"
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button" className="btn-trash btn sm" onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};
// }

export default EmployeesListItem;
