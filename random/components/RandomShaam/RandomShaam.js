import { StyleSheet, Text, View, Button } from 'react-native';
import {Component} from "react";

class RandomShaam extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentNumber: 0
        }
    }
    onRandom = () => {
        this.setState(state => ({
            currentNumber: state.currentNumber + 1
        }));
    }

    componentDidMount(){
        this.stateRND();
    }

    stateRND = () => {
        console.log("RND");
        let rndCounter = (Math.random() * (65 - 71 + 1) + 71).toFixed(1);
        console.log(rndCounter);
        this.setState((state) => ({ currentNumber: (state.currentNumber = rndCounter) }));
      };

    render() {
        return(
            <View style={styles.button}>
                <Text style={styles.text}>Meat:  {this.state.currentNumber}</Text>
                <Button title='Click' onPress={this.stateRND}>Click</Button>
            </View>
        )
    }

}


const styles = StyleSheet.create({
    button: {
        width: "90%"

    },
    text: {
        fontSize: 30,
        textAlign: "center",
        paddingBottom: 20
    }
  });
  

export default RandomShaam;