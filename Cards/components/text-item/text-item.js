import {View, StyleSheet} from "react-native";
import {Text, Paragraph, Button} from "react-native-paper";
import {Component} from "react";


class TextItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            lessons: ["English", "Math"]
        }
    }

    onClickEnglish = () => {

    }

    render(){

        return(
            <View style={styles.text}>
                <Paragraph style={styles.paragraph}>Select Course:</Paragraph>
                <Button id="English" style={styles.button} mode="contained" onPress={() => console.log("Math")}>{this.state.lessons[0]}</Button>
                <Button id="Math" style={styles.button} mode="contained" onPress={() => console.log("English")}>{this.state.lessons[1]}</Button>

            </View>
            
        )
    }
}

export default TextItem;

const styles = StyleSheet.create({
    text: {
        margin: 10
    },
    paragraph:{
        fontSize: 20
    },
    button: {
        margin: 10
    }

});

