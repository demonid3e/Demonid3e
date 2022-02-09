// import "./employees-add-form.css";
import { Component } from "react";
import "./employee-add-form.scss";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }
  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  // calls event prevent default
  // since onAdd is prop of form passes:
  // this.state.name as name argument
  // this.state.salary as salary argument
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.name.length);
    if (this.state.name.length >= 3 && this.state.salary.length >= 1) {
      this.props.onAdd(this.state.name, this.state.salary);
      // this line sets empty strings after add
      this.setState({ name: "", salary: "" });
      console.log("all good");
    } else if (this.state.name.length < 3) {
      console.log("Name is too short, please enter longer name");
      this.setState({ name: "", salary: "" });
    } else if (this.state.salary.length <= 0) {
      console.log("Salary cant be 0, please enter correct salary");
      this.setState({ name: "", salary: "" });
    }
  };

  render() {
    const { name, salary } = this.state;
    return (
      <div className="app-add-form">
        <h3>Add new employee</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="What`s his name?"
            name="name"
            value={name}
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Wage in $?"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
          />

          <button type="submit" className="btn btn-outline-light">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
