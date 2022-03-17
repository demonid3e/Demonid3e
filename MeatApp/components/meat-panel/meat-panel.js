import {View, Image, Text, StyleSheet} from "react-native";
import {Component} from "react";

class MeatPanel extends Component {

   render () {

    let {Beef, Gammon, Turkey, Pork} = this.props.props;

  

      if (this.props.props.Sunday){
        Pork -= 6;
        Gammon -= 12;
        Beef -= 13;
        Turkey -= 14;
     }
     if(this.props.props.Monday){
       Pork -= 3;
       Beef -= 6;
       Gammon -= 6;
       Turkey -= 7;
     }
     if(this.props.props.Tuesday){
       Pork -= 3;
       Beef -= 6;
       Gammon -= 6;
       Turkey -= 7;
     }
     if(this.props.props.Wednesday){
       Pork -= 3;
       Beef -= 6;
       Gammon -= 6;
       Turkey -= 7;
     }
     if(this.props.props.Thursday){
       Pork -= 3;
       Beef -= 6;
       Gammon -= 6;
       Turkey -= 7;
     }
     if(this.props.props.Friday){
       Pork -= 3;
       Beef -= 6;
       Gammon -= 6;
       Turkey -= 7;
     }
     if(this.props.props.Saturday){
       Pork -= 3;
       Beef -= 6;
       Gammon -= 6;
       Turkey -= 7;
     }
    




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