import { Component } from "react";
import "./meat-panel.css";

class  MeatPanel extends Component {


  // wrote component that shows when there is no days or less than 2 days selected
  
  render() {
      let {Beef, Gammon, Turkey, Pork,} = this.props.data;
      if (this.props.data.Sunday){
         Pork -= 6;
      }
      if(this.props.data.days.Monday){
        Pork -= 3;
      }


        return (
          <div className="meat-panel">
            <h1>Meat to order:</h1>
            <ul>
              <li>Gammon: {Gammon  + this.props.data.delivery.Gammon}</li>
              <li>Beef: {Beef + this.props.data.delivery.Beef }</li>
              <li>Turkey: {Turkey  + this.props.data.delivery.Turkey}</li>
              <li>Pork: {Pork + this.props.data.delivery.Pork } </li>
            </ul>
      
          </div>
        );
  }
  
}
  

 

export default MeatPanel;
