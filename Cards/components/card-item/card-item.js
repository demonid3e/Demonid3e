import {View, StyleSheet} from "react-native";
import {Text, Paragraph, Button, Title} from "react-native-paper";
import {Component} from "react";


class CardItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "Math",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias blanditiis debitis laudantium, labore magnam provident illum voluptatem magni fugiat? Eos sint obcaecati perferendis suscipit quaerat facere vero placeat voluptatem neque!"        }
    }
    render(){

        return(
            <View >
                <Title>{this.state.title}</Title>
                <Text>{this.state.text}</Text>                
            </View>
            
        )
    }
}

export default CardItem;

const styles = StyleSheet.create({


});

