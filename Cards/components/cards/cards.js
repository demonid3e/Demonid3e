import {View, StyleSheet} from "react-native";
import {Text, Paragraph, Button} from "react-native-paper";
import {Component} from "react";
import CardItem from "../card-item/card-item";


class Cards extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){

        return(
            <View >
                <CardItem/>
            </View>
            
        )
    }
}

export default Cards

const styles = StyleSheet.create({


});

