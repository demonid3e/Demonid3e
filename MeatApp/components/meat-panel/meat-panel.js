import {View, Image, Text, StyleSheet} from "react-native";
import {Component} from "react";

class MeatPanel extends Component {

   render () {

    const {Beef, Gammon, Turkey, Pork} = this.props.props;
    
    return (
      <View style={styles}>
        <Text>Beef: {Beef + this.props.delivery.Beef}</Text>
        <Text>Gammon: {Gammon + this.props.delivery.Gammon}</Text>
        <Text>Turkey: {Turkey + this.props.delivery.Turkey}</Text>
        <Text>Pork: {Pork + this.props.delivery.Pork}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  margin: 10
})

export default MeatPanel;