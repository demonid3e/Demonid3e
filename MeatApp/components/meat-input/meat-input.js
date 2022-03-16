import { Component } from "react";
import {View, Text, TextInput, StyleSheet} from "react-native";
import React from "react";

const Context = React.createContext();

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
    
    onChangeBeef = (e) => {
        this.setState({Beef: e.replace(/[^0-9]/g, '')})
        console.log(this.state, "meat input");
    }

    onChangeGammon = (e) => {
        this.setState({Gammon: e.replace(/[^0-9]/g, '')})
        console.log(this.state, "meat input");
    } 
    
    onChangeTurkey = (e) => {
        this.setState({Turkey: e.replace(/[^0-9]/g, '')})
        console.log(this.state, "meat input");
    } 
    
    onChangePork = (e) => {
        this.setState({Pork: e.replace(/[^0-9]/g, '')})
        console.log(this.state, "meat input");

    }

    render () {
        return (
            <View >
                <Text>This is Meat in Stock</Text>
                <TextInput 
                style={styles.container} 
                placeholder=" Beef " 
                name="Beef" 
                onPropsChange ={e => this.onChangeBeef(e)}
                onChangeText={value => {this.onChangeBeef(value); this.props.onPropsChangeBeef(value)}}
                value={this.state.Beef}
                maxLength={2}
                ></TextInput>

                <TextInput                 
                style={styles.container} 
                placeholder=" Gammon " 
                name="Gammon" 
                onChangeText={value => {this.onChangeGammon(value) ; this.props.onPropsChangeGammon(value)}}
                value={this.state.Gammon}
                maxLength={2}></TextInput>
                
                <TextInput                 
                style={styles.container} 
                placeholder=" Turkey " 
                name="Turkey" 
                onChangeText={value => {this.onChangeTurkey(value) ; this.props.onPropsChangeTurkey(value)}}
                value={this.state.Turkey}
                maxLength={2}></TextInput>
                <TextInput                
                style={styles.container} 
                placeholder=" Pork " 
                name="Pork" 
                onChangeText={value => {this.onChangePork(value) ; this.props.onPropsChangePork(value)}}
                value={this.state.Pork}
                maxLength={2}></TextInput>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        margin: 10,
        backgroundColor: "red"
    },
    container: {
        borderColor: "black",
        color: "blue",
        borderWidth: 1,
        width: 150,
        margin: 10,
        borderRadius: 5
    }
})

export default MeatInput;