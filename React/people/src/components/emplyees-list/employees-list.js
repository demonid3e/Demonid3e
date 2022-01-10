import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({ data }) => {
  // because map() return a new array in elements you have array of:
  // <EmployeesListItem name={item.name} salary={item.salary} />;

  const elements = data.map((item) => {
    //    return <EmployeesListItem name={item.name} salary={item.salary} />;
    // using spread operator we can change to
    return <EmployeesListItem {...item} />;
  });
  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
