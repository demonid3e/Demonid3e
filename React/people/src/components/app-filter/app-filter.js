import { Component } from "react";
import "./app-filter.css";

class AppFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "all",
    };
  }

  onTest = (e) => {
    const btns = document.querySelectorAll("[data-active]"),
      classActive = "btn btn-light",
      classNotActive = "btn btn-outline-light",
      current = e.target.getAttribute("data-filter");
    this.setState({ current });

    btns.forEach((item) => {
      item.className = classNotActive;
      e.target.className = classActive;
    });
  };
  render() {
    console.log("I`m the render", this.state.current);
    return (
      <div className="btn-group">
        <button
          value={this.state.current}
          data-filter="all"
          data-active="active"
          onClick={this.onTest}
          className="btn btn-light"
          type="button"
        >
          All Collegues
        </button>
        <button
          value={this.state.current}
          data-filter="good"
          data-active="active"
          onClick={this.onTest}
          className="btn btn-outline-light"
          type="button"
        >
          Good performing
        </button>
        <button
          value={this.state.current}
          data-filter="higher"
          data-active="active"
          onClick={this.onTest}
          className="btn btn-outline-light"
          type="button"
        >
          Pay Higher than 1000$
        </button>
      </div>
    );
  }
}

export default AppFilter;
