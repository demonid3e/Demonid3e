import {View, StyleSheet} from "react-native";
import {Text, Paragraph, Button, Title} from "react-native-paper";
import {Component} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';



class CardItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "Math",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias blanditiis debitis laudantium, labore magnam provident illum voluptatem magni fugiat? Eos sint obcaecati perferendis suscipit quaerat facere vero placeat voluptatem neque!"        }
    }

    

    saveCard = async () => {
      try {
        await AsyncStorage.setItem("Demon", this.title)
      } catch (err) {
        alert(err);
      }
    }
  
  
    loadCard = async () => {
      try {
        let name = await AsyncStorage.getItem("Demon");
        console.log(name);
        if (name !== null) {
          this.setState({test: name})
        }
  
      } catch (err) {
        alert(err);
      }finally{
          console.log(this.state);
      }
    }

    componentDidMount () {
        this.loadCard();
    }

    render(){
        const {test} = this.state;
        return(
            <View >
                <Title id="title">{test} state</Title>
                <Text>{this.state.text}</Text>                
            </View>
            
        )
    }
}

export default CardItem;

const styles = StyleSheet.create({


});

