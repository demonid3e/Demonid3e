import MeatPanel from "../components/meat-panel/meat-panel";
import MeatInput from "../components/meat-input/meat-input";
import MeatDelivery from "../components/meat-delivery/meat-delivery";
import MeatDay from "../components/meat-day/meat-day";
import {Component} from "react";




class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      beef: 0
    }
    onUpdate = (beef) => {
      this.setState({ beef });
    };

  }
  render() {
    return (
      <div className="App">
        <MeatPanel/>
        <MeatInput onUpdate={this.onUpdate}/>
        <MeatDelivery/>
        <MeatDay />
      </div>
    );
  }

}

export default App;
