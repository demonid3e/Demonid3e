import MeatPanel from "../components/meat-panel/meat-panel";
import MeatInput from "../components/meat-input/meat-input";
import MeatDelivery from "../components/meat-delivery/meat-delivery";
import MeatDay from "../components/meat-day/meat-day";
import {Component} from "react";
import "./App";




class App extends Component {
  constructor(props){
    super(props);
    this.state = {

        Beef: "",
        Gammon: "",
        Turkey: "",
        Pork: ""
      
    }
    // onUpdate = (props) => {
    //   this.setState({ state: this.props.data });
    // }


  }

  onDelivery = (meat,value) => {
    console.log(`this ${meat} has this ${value}`);
  }


  onUpdate = (meat, value) => {
    this.setState({ [meat]: [value] })
  }
  render() {
    return (
      <div className="App">
        <MeatPanel data={this.state}/>
        <MeatInput onUpdate={this.onUpdate} data={this.state}  />
        <MeatDelivery onDelivery={this.onDelivery} data={this.state}/>
        <MeatDay />
      </div>
    );
  }

}

export default App;
