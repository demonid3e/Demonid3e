import MeatPanel from "../components/meat-panel/meat-panel";
import MeatInput from "../components/meat-input/meat-input";
import MeatDelivery from "../components/meat-delivery/meat-delivery";
import MeatDay from "../components/meat-day/meat-day";
import {Component} from "react";




class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      beef: "1",
      gammon: "",
      turkey: "",
      pork: "",
 
    }
    // onUpdate = (props) => {
    //   this.setState({ state: this.props.data });
    // }


  }

  onUpdate = () => {
    this.setState({});
    console.log("app" ,this.state);
  }
  render() {
    return (
      <div className="App">
        <MeatPanel data={this.state.data}/>
        <MeatInput onUpdate={this.onUpdate} data={this.state.data}/>
        <MeatDelivery/>
        <MeatDay />
      </div>
    );
  }

}

export default App;
