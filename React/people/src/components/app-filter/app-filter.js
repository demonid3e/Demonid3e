import "./app-filter.css";

const AppFilter = () => {
  return (
    <div className="btn-group">
      <button className="btn btn-light" type="button">
        All Collegues
      </button>
      <button className="btn btn-outline-light" type="button">
        Good performing
      </button>
      <button className="btn btn-outline-light" type="button">
        Pay Higher than 1000$
      </button>
    </div>
  );
};

export default AppFilter;
