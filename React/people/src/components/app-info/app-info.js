import "./app-info.css";

const AppInfo = ({ increased, employees }) => {
  return (
    <div className="app-info">
      <h1>List or employees in company "Fenita"</h1>
      <h2>Total number of employees: {employees} </h2>
      <h2>Bonus will receive: {increased} </h2>
    </div>
  );
};

export default AppInfo;
