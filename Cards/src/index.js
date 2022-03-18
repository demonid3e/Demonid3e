import { StyleSheet, Text, View } from 'react-native';
import { Button} from "react-native-paper";
import TextItem from '../components/text-item/text-item';
import {Component} from "react";
import Cards from '../components/cards/cards';
import AsyncStorage from '@react-native-async-storage/async-storage';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      mainMenu: true
    }
    

      const storeData = async (value) => {
        try {
          await AsyncStorage.setItem('Demon', value)
        } catch (e) {
          // saving error
        }
      }

    

    
      const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('Demon')
          if(value !== null) {
            console.log(value, "I`m get value");
          }
        } catch(e) {
          // error reading value
        }
      }
    

  }

  




  render () {
    return (
      <View style={styles.container}>
        <Button onPress={e => {this.storeData("TEST:")}}>I`m test button</Button>

        <Button onPress={e => {this.getData}}>I`m Read Button</Button>

        
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