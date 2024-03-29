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
        {
          name: "Tanya B.",
          salary: 800,
          increase: true,
          rise: false,
          id: 1,
        },
        {
          name: "Valerie B.",
          salary: 3000,
          increase: false,
          rise: false,
          id: 2,
        },
        {
          name: "Ana B.",
          salary: 5000,
          increase: false,
          rise: true,
          id: 3,
        },
        {
          name: "Dema B.",
          salary: 15000,
          increase: false,
          rise: true,
          id: 4,
        },
      ],
      term: "",
      filter: "all",
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
      promote: false,
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

  onToggleProp = (id, prop) => {
    // this.setState(({ data }) => {
    //   const index = data.findIndex((elem) => elem.id === id);
    //   const old = data[index];
    //   const newItem = { ...old, increase: !old.increase };
    //   const newArray = [
    //     ...data.slice(0, index),
    //     newItem,
    //     ...data.slice(index + 1),
    //   ];
    //   return {
    //     data: newArray,
    //   };
    // });
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
    console.log(`Increase this ${id}`);
  };

  // onToggleRise = (id) => {
  //   this.setState(({ data }) => ({
  //     data: data.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, promote: !item.promote };
  //       }
  //       return item;
  //     }),
  //   }));
  //   console.log(`Rise this ${id}`);
  // };

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  // onFilter = (filter) => {
  //   if (filter === "all") {
  //     const allFilter = this.state.data.filter((item) => item);
  //     console.log("I`m all", allFilter);
  //   }
  //   if (filter === "good") {
  //     const increaseFilter = this.state.data.filter((item) => item.increase);
  //     console.log("I`m good", increaseFilter);
  //   }
  //   if (filter === "higher") {
  //     const higherFilter = this.state.data.filter((item) => item.rise);
  //     console.log("I`m higher", higherFilter);
  //   }
  // };
// 
  filterPost = (items, filter) => {
    switch (filter) {
      case "rise":
        return items.filter((item) => item.rise);
      case "moreThen1000":
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };
  // on call sets the current filter value to the one that been passed
  onFilterSelect = (filter) => {
    this.setState({ filter });
    
  };

  render() {
    
    const { data, term, filter } = this.state;
    const employees = this.state.data.length;
    const increased = this.state.data.filter((item) => item.increase).length;
    // makes it to be able to search when filter is on
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);
    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased} />
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>
        {/* data props is passed as object */}
        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAdd={this.addPerson} />
      </div>
    );
  }
}

export default App;

// id generation
// submit form
