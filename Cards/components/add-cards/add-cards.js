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
        let tempState = JSON.parse(this.state.name);



        const addCardValue = {
            title: this.state.title,
            question: this.state.question,
            answer: this.state.answer,
            id: tempState.length + 1
        }
        tempState.push(addCardValue);
        const save = async (value) => {
            try {
              const jsonValue = JSON.stringify(value);
              await AsyncStorage.setItem("Demon", jsonValue);
            } catch (err) {
              alert(err);
            }
          }
          save(tempState);
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
          save([{title: "Math", question: "2 + 2", answer: "4", id: 1}]);
    }

    load = async () => {
        try {
        let name = await AsyncStorage.getItem("Demon");

        if (name !== null) {
            this.setState({name})
        }

        } catch (err) {
        alert(err);
        } finally {
            console.log(this.state, "im load in add card");
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
        flex: 1,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center'
    }
  });



export default AddCards;
