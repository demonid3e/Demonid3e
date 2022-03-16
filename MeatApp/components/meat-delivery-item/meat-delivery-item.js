import {Component} from "react";
import {TextInput, Text, View, StyleSheet} from "react-native";


class MeatDeliveryItem extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render (){
        return(
            <>
                <TextInput style={styles.container} onChangeText={this.props.onDelivery(this.props.name)} name={this.props.name} placeholder= {this.props.name} id={this.props.id} ></TextInput>
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


export default MeatDeliveryItem;