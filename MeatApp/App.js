import { Component } from "react";
import MeatPanel from "./components/meat-panel/meat-panel"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import MeatInput from "./components/meat-input/meat-input";
import MeatDelivery from "./components/meat-delivery/meat-delivery";
import MeatDay from "./components/meat-day/meat-day";

const Toby = require("./assets/toby.png");


class App extends Component {
    constructor(props){
      super(props)
      this.state = {
        Beef: "",
        Gammon: "",
        Turkey: "",
        Pork: "",

        delivery: {
          Beef: "",
          Gammon: "",
          Turkey: "",
          Pork: "",
        },
        Sunday: false,
        Monday: false,
        Tuesday: false,
        Wednesday: false,
        Thursday: false,
        Friday: false,
        Saturday: false
      }
    }

    onCheck = (name) => (value) => {
      console.log(name,value);
      if(!value){
        value = 0
      }
      this.setState({[name]: parseInt(value)});
      console.log(this.state);
    };

    onDelivery = (name) => (value) => {
      if(!value){
        value = 0
      }
      const delivery = {...this.state.delivery};
      delivery[name] = parseInt(value);
      this.setState({delivery});
      console.log(this.state);
    };

    onSwitch = (name) => (value) => {
      console.log(name,value);
      this.setState({[name]: !this.state[name]});
      console.log(this.state.Sunday);
    };

    render () {

      return (
        <ScrollView>
          <View style={styles.container}>
            <Image style={styles.image} source={Toby}/>
            <MeatPanel props={this.state} delivery={this.state.delivery}/>
            <View style={{flexDirection:"row"}}>
              <View style={{flex:1}}>
                <MeatInput style={{justifyContent: 'flex-start',}} onCheck={this.onCheck} value={this.state}/>
              </View>
              <View style={{flex:1}}>
              <MeatDelivery style={{justifyContent: 'flex-end',}} onDelivery={this.onDelivery} props={this.state}/>
              </View>
            </View>
            <MeatDay props={this.state} onSwitch={this.onSwitch}/>
          </View>
        </ScrollView>
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
    marginTop: 50,
    width: 100,
    height: 50
  }
});

export default App;