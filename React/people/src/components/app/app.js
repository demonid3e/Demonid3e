import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../emplyees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import "./app.css";

function App() {
  const data = [
    { name: "Tanya B.", salary: 800, increase: true, id: 1 },
    { name: "Valerie B.", salary: 3000, increase: false, id: 2 },
    { name: "Ana B.", salary: 5000, increase: false, id: 3 },
    { name: "Dema B.", salary: 15000, increase: false, id: 4 },
  ];
  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
