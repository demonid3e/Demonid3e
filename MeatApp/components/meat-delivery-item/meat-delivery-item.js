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
                <TextInput onChangeText={this.props.onDelivery(this.props.name)} name={this.props.name} placeholder= {this.props.name} id={this.props.id} ></TextInput>
            </>
        )
    }
}

export default MeatDeliveryItem;