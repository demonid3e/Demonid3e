import { StyleSheet, Text, View } from 'react-native';
import { Button} from "react-native-paper";
import TextItem from '../components/text-item/text-item';
import {Component} from "react";
import Cards from '../components/cards/cards';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      mainMenu: true
    }
  }


  render () {
    return (
      <View style={styles.container}>
        {this.state.mainMenu ? <TextItem/> : <Cards/> }
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