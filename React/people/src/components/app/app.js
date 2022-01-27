// importing all components and css for app
import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../emplyees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Tanya B.", salary: 800, increase: true, id: 1 },
        { name: "Valerie B.", salary: 3000, increase: false, id: 2 },
        { name: "Ana B.", salary: 5000, increase: false, id: 3 },
        { name: "Dema B.", salary: 15000, increase: false, id: 4 },
      ],
    };
    this.maxId = 5;
  }

  // takes name and salary
  addPerson = (name, salary) => {
    //creates new object where name is name salary is salary, increase default false
    // id maxid +1
    //from Current DATA creates a newArr with all data + new Item
    // then returns new DATA from newArr
    const newItem = {
      name,
      salary,
      increase: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ data }) => {
      // ANOTHER WAY OF DOING IT
      // const index = data.findIndex((elem) => elem.id === id);
      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);
      // const newArr = [...before, ...after];
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
    console.log("deleted");
  };

  // this object is passed as PROPS OBJECT to EmployeeList component in app
  // you must add id so JSX don`t rerender all page just the edited part

  render() {
    return (
      <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        {/* data props is passed as object */}
        <EmployeesList data={this.state.data} onDelete={this.deleteItem} />
        <EmployeesAddForm onAdd={this.addPerson} />
      </div>
    );
  }
}

export default App;

// id generation
// submit form
