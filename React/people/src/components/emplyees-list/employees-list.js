import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({ data, onDelete }) => {
  // because map() return a new array in elements you have array of:
  // <EmployeesListItem name={item.name} salary={item.salary} />;

  const elements = data.map((item) => {
    // getting out only id, all the rest is in itemProps
    const { id, ...itemProps } = item;
    // return <EmployeesListItem name={item.name} salary={item.salary} />;
    // using spread operator we can change to
    // return <EmployeesListItem {...item} />;

    // we taking the rest of props in item that left and passing them to EmployeListItem
    return (
      <EmployeesListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
      />
    );
  });
  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
