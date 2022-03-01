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

        Beef: "5",
        Gammon: "",
        Turkey: "2",
        Pork: ""
      
    }
    // onUpdate = (props) => {
    //   this.setState({ state: this.props.data });
    // }


  }

  onUpdate = (meat, value) => {
    this.setState({ [meat]: [value] })
    console.log("app" ,this.state, `this meat is: ${meat}`);
  }
  render() {
    return (
      <div className="App">
        <MeatPanel data={this.state}/>
        <MeatInput onUpdate={this.onUpdate} data={this.state}  />

        <MeatDelivery/>
        <MeatDay />
      </div>
    );
  }

}

export default App;
