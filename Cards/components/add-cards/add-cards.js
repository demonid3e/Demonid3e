import {View, StyleSheet} from "react-native";
import {Text, Paragraph, Button, Title, TextInput} from "react-native-paper";
import {Component} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


class AddCards extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            question: "",
            answer: ""
        }

    }
   

    componentDidMount() {
        this.setState({name: null});
        this.load();
    }

    onTitleChange = (value) => {
        this.setState({title: value});
    }

    onQuestionChange = (value) => {
        this.setState({question: value});
    }

    onAnswerChange = (value) => {
        this.setState({answer: value});
    }

    addCard = () => {

        console.log(this.state.name, "before added");
        let tempState = JSON.parse(this.state.name);
        const addCardValue = {
            title: this.state.title,
            question: this.state.question,
            answer: this.state.answer,
            id: tempState.length + 1
        }
        console.log(this.state.name, " added 2");
        tempState.push(addCardValue);
        
        const save = async (value) => {
            try {
              const jsonValue = JSON.stringify(value);
              await AsyncStorage.setItem("Demon", jsonValue);
            } catch (err) {
              alert(err);
            } finally {
                console.log(this.state.name, "finally");
                this.load();
            }
          }
          save(tempState);
          console.log(this.state.name, "empty");
          this.setState({            
            title: "",
            question: "",
            answer: ""});

            console.log(this.state.name, "after last load");
    }


    resetAll = () => {

        const save = async (value) => {
            try {
              const jsonValue = JSON.stringify(value);
              await AsyncStorage.setItem("Demon", jsonValue);
            } catch (err) {
              alert(err);
            }
          }
          save([{title: "Empty", question: "Empty", answer: "Empty", id: 1}]);
          this.load();
    }

    load = async () => {
        try {
            let name = await AsyncStorage.getItem("Demon");

            if (name !== null) {
                this.setState({name});            
            }
        } catch (err) {
            alert(err);
        }
  }


    render(){
        return(
            <View style={styles.buttons}>
                <Text>{this.state.title} {this.state.question} {this.state.answer}</Text>
                <TextInput value={this.state.title} onChangeText={(value) => this.onTitleChange(value)}  placeholder="Title"/>
                <TextInput value={this.state.question} onChangeText={(value) => this.onQuestionChange(value)} placeholder="Question:"/>
                <TextInput value={this.state.answer} onChangeText={(value) => this.onAnswerChange(value)} placeholder="Answer"/>
                <Button onPress={this.addCard}>Add Cards</Button>
                <Button onPress={this.resetAll}>Reset</Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttons: {
        // flex: 1,
        // width: 200,
        // alignItems: 'center',
        // justifyContent: 'center'
        margin: 20
    }
  });



export default AddCards;
