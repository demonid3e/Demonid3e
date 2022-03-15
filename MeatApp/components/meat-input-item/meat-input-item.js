import { Component } from "react";
import {View, Text, StyleSheet, TextInput} from "react-native";


class MeatInputItem extends Component {
    constructor(props){
        super(props); 
        this.state =  {

        }       
    }

    // onChange = (e) => {
    //     // state is current state, function is used so there is no problem assync changing of state
    //     // this.setState({ [e.target.name]: e.target.value });
    //     console.log(this.state);
    //   };

    render () {
        return (
            <View>
                <TextInput label = "test" style={styles.container}/>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        borderColor: "black",
        color: "blue",
        borderWidth: 1
    },
  });

export default MeatInputItem