import { Component } from "react";
import MeatPanel from "./components/meat-panel/meat-panel"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import MeatInput from "./components/meat-input/meat-input";
import MeatDelivery from "./components/meat-delivery/meat-delivery";

const Toby = require("./assets/toby.png");


class App extends Component {
    constructor(props){
      super(props)
      this.state = {
        Beef: 0,
        Gammon: 0,
        Turkey: 0,
        Pork:0,

        delivery: {
          Beef: "",
          Gammon: "",
          Turkey: "",
          Pork: ""
        }
      }
    }

    onCheck = (name) => (value) => {
      console.log(name,value);
      this.setState({[name]: value});
      console.log(this.state);
    };

    onDelivery = (name) => (value) => {
      const delivery = {...this.state.delivery};
      delivery[name] = parseInt(value);
      this.setState({delivery});
      console.log(this.state);
    };


    render () {
      return (
        <View style={styles.container}>
          <Image style={styles.image} source={Toby}/>
          <MeatPanel props={this.state}/>
          <MeatInput onCheck={this.onCheck}/>
          <MeatDelivery onDelivery={this.onDelivery}/>
        </View>
      );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 50
  }
});

export default App;