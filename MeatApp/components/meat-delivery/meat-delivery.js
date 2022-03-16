import { Component } from "react";
import {View, TextInput, StyleSheet, Text} from "react-native"


class MeatDelivery extends Component {
    constructor(props){
        super(props);

    }
    render() {
        return (
            <>
            <Text>This is Delivery </Text>
                <TextInput style={styles.container} placeholder=" Beef "></TextInput>
                <TextInput style={styles.container} placeholder=" Gammon "></TextInput>
                <TextInput style={styles.container} placeholder=" Turkey "></TextInput>
                <TextInput style={styles.container} placeholder=" Pork "></TextInput>
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