import {Component} from "react";
import {Button, View, Text, StyleSheet} from "react-native";

class RandomHot extends Component {
    constructor(props){
        super(props);
        this.state = {
            randomHotNumber: 0
        }
    }

    componentDidMount(){
        this.stateRND();
    }

    stateRND = () => {
        console.log("RND");
        let rndCounter = (Math.random() * (76 - 92 + 1) + 92).toFixed(1);
        console.log(rndCounter);
        this.setState((state) => ({ randomHotNumber: (state.randomHotNumber = rndCounter) }));
      };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.state.randomHotNumber}</Text>
                <Button title="Click" onPress={this.stateRND}>Click</Button>
            </View>
        )
    }
}



const styles = StyleSheet.create({

    container: {
        marginTop: 20,
        width: "80%"
        
    },

    button: {
        width: 200,
        height: 100
    },
    text: {
        fontSize: 30,
        textAlign: "center",
        paddingBottom: 20
    }
  });
  

export default RandomHot;