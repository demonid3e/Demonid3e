import { Component } from "react";
import "./meat-panel.css";

class  MeatPanel extends Component {
  constructor(props){
    super(props);
    this.state = {
      Gammon: 0,
      Beef: 0,
      Turkey: 0,
      Pork: 0

    }
  }
  render() {
    const {Gammon, Beef, Turkey, Pork} = this.state;
    return (
      <div className="meat-panel">
        <h1>Meat to order:</h1>
        <ul>
          <li>Gammon: {Gammon}</li>
          <li>Beef: {Beef}</li>
          <li>Turkey: {Turkey}</li>
          <li>Pork: {Pork}</li>
        </ul>
  
      </div>
    );
  }
  
}
  

 

export default MeatPanel;
