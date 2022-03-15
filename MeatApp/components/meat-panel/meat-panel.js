import {View, Image, Text} from "react-native";
import {Component} from "react";

class MeatPanel extends Component {

  state = {
    Beef: 1,
    Gammon: 2,
    Turkey: 3,
    Pork: 4
  }

  render () {
    return (
      <View>
        <Text>Beef: {this.state.Beef}</Text>
        <Text>Gammon: {this.state.Gammon}</Text>
        <Text>Turkey: {this.state.Turkey}</Text>
        <Text>Pork: {this.state.Pork}</Text>
      </View>
    );
  }
}

export default MeatPanel;