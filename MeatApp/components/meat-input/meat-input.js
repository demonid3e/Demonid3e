import { Component } from "react";
import MeatInputItem from "../meat-input-item/meat-input-item";
import {View, Text, TextInput} from "react-native";

class MeatInput extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        
    }
    
    render () {
        return (
            <View>
                <Text>I`m another test text</Text>
                <MeatInputItem label="Beef"/>
            </View>
        )
    }
}

export default MeatInput;