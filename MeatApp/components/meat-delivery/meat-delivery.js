import { Component } from "react";
import {View, TextInput, StyleSheet, Text} from "react-native"
import MeatDeliveryItem from "../meat-delivery-item/meat-delivery-item";


class MeatDelivery extends Component {
    constructor(props){
        super(props);

    }
    render() {
        return (
            <>
            <Text>This is Delivery </Text>
                <MeatDeliveryItem name="Beef" id="Delivery_beef" onDelivery={this.props.onDelivery}/>
            </>
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

export default MeatDelivery;