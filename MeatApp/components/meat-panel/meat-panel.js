import {View, Image, Text, StyleSheet} from "react-native";
import {Component} from "react";

class MeatPanel extends Component {

   render () {

    const {Beef, Gammon, Turkey, Pork} = this.props.props;
    return (
      <View style={styles}>
        <Text>Beef: {Beef}</Text>
        <Text>Gammon: {Gammon}</Text>
        <Text>Turkey: {Turkey}</Text>
        <Text>Pork: {Pork}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  margin: 10
})

export default MeatPanel;