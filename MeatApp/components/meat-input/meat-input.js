import { Component } from "react";
import MeatInputItem from "../meat-input-item/meat-input-item";
import {View, Text, TextInput, StyleSheet} from "react-native";

class MeatInput extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        
    }
    
    render () {
        return (
            <View>
                <Text style={styles.text}>I`m another test text</Text>
                <MeatInputItem label="Beef"/>
                <MeatInputItem label="Gammon"/>
                <MeatInputItem label="Turkey"/>
                <MeatInputItem label="Pork"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        margin: 10,
        backgroundColor: "red"
    }
})

export default MeatInput;