import {Component} from "react";
import {View, Text, TextInput, StyleSheet} from "react-native";

class MeatInputItem extends Component{
    constructor(props){
        super(props);
        this.state = {

        }

    }
    render(){

        
        return (
            <>
            <TextInput 
            style={styles.container}
            id={this.props.id} 
            name={this.props.name} 
            onChangeText={this.props.onCheck(this.props.name)}  
            placeholder= {this.props.name}>
            </TextInput>
            
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

export default MeatInputItem;