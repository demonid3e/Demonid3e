import { Component } from "react";
import {View, Text, TextInput, StyleSheet} from "react-native";
import React from "react";
import MeatInputItem from "../meat-input-item/meat-input-item";


class MeatInput extends Component {
    constructor(props) {
        super(props); 
        this.state =  {
            Beef: "",
            Gammon: "",
            Turkey: "",
            Pork: ""

        } 
    }

    
    
    // onChangeBeef = (e) => {
    //     this.setState({Beef: e.replace(/[^0-9]/g, '')})
    // }
 

    render () {
        return (
            <View >
                <Text>This is Meat in Stock</Text>
                <MeatInputItem value={this.props.value} onCheck={this.props.onCheck} name="Beef" id="Beef_Input" />
                <MeatInputItem value={this.props.value} onCheck={this.props.onCheck} name="Gammon" id="Gammon_Input" />
                <MeatInputItem value={this.props.value} onCheck={this.props.onCheck} name="Turkey" id="Turkey_Input" />
                <MeatInputItem value={this.props.value} onCheck={this.props.onCheck} name="Pork" id="Pork_Input" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
    }
})

export default MeatInput;