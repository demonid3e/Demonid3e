import { Component } from "react";
import MeatPanel from "./components/meat-panel/meat-panel"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MeatInput from "./components/meat-input/meat-input";
import MeatDelivery from "./components/meat-delivery/meat-delivery";


class App extends Component {
    constructor(props){
      super(props)
      this.state = {
        Beef: 0,
        Gammon: 0,
        Turkey: 0,
        Pork:0
      }
    }

    onCheck = (name) => (value) => {
      console.log(name,value);
    };

    onPropsChangeBeef = (e) => {
      this.setState({Beef: e})
 
    }
    onPropsChangeGammon = (e) => {
      this.setState({Gammon: e})

    }
    onPropsChangeTurkey = (e) => {
      this.setState({Turkey: e})

    }
    onPropsChangePork = (e) => {
      this.setState({Pork: e})
    }

   

    render () {
      return (
        <View style={styles.container}>
          <MeatPanel props={this.state}/>
          <MeatInput onCheck={this.onCheck}  onPropsChangeBeef={this.onPropsChangeBeef} onPropsChangeGammon={this.onPropsChangeGammon} onPropsChangeTurkey={this.onPropsChangeTurkey} onPropsChangePork={this.onPropsChangePork}/>
          <MeatDelivery/>
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
});

export default App;