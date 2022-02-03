import "./app-filter.css";

const AppFilter = (props) => {
  const buttonsData = [
    { name: "all", label: "All Collegues" },
    { name: "rise", label: "Good Performing" },
    { name: "moreThen1000", label: "Pay Higher than 1000$" },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const active = props.filter === name;
    const clazz = active ? "btn-light" : "btn-outline-light";
    return (
      <button
        className={`btn ${clazz}`}
        type="button"
        key={name}
        onClick={() => props.onFilterSelect(name)}
      >
        {label}
      </button>
    );
  });
  // onFilter = (e) => {
  //   const btns = document.querySelectorAll("[data-active]"),
  //     classActive = "btn btn-light",
  //     classNotActive = "btn btn-outline-light",
  //     current = e.target.getAttribute("data-filter");
  //   this.setState({ current });

  //   btns.forEach((item) => {
  //     item.className = classNotActive;
  //     e.target.className = classActive;
  //   });

  //   this.props.onFilter(current);
  // };
  return (
    <div className="btn-group">
      {buttons}
      {/* <button className="btn btn-light" type="button">
        All Collegues
      </button>
      <button className="btn btn-outline-light" type="button">
        Good performing
      </button>
      <button className="btn btn-outline-light" type="button">
        Pay Higher than 1000$
      </button> */}
    </div>
  );
};

export default AppFilter;
