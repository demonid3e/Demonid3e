import { Component } from "react";
import "./meat-panel.css";

class  MeatPanel extends Component {
  
  render() {
    const {Beef, Gammon, Turkey, Pork} = this.props.data;
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
