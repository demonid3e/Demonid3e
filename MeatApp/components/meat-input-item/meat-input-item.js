import { Component } from "react";
import {View, Text, StyleSheet, TextInput} from "react-native";


class MeatInputItem extends Component {
    constructor(props){
        super(props); 
        this.state =  {
            value: "",
            Beef: "fsfsdfdsf",
            Gammon: "",
            Turkey: "",
            Pork: ""

        }       
    }

    onChange = (e) => {
        // state is current state, function is used so there is no problem assync changing of state
         this.setState({ [e.target.name]: e.target.value });
        console.log(this.state);
      };

    render () {
        const {Beef, Gammon, Turkey, Pork, value} = this.state;
        return (
            <View>
                <Text id={this.props.label} name={this.props.name} onChangeText={e => {this.onChange(e)}}>{this.props.label} value is {this.state.Beef}  </Text>
                <TextInput 
                style={styles.container}/>
                <Text>{Beef}text</Text>
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