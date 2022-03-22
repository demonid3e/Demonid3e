import {View, StyleSheet} from "react-native";
import {Text, Paragraph, Button, Title} from "react-native-paper";
import {Component} from "react";
import Cards from "../cards/cards";


class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            view: false
        }
    }


    onView = () => {
        console.log("Click View");
        this.setState({view: true})
        console.log(this.state);
    }

    onAdd = () => {
        console.log("Click Add");
    }

    onDel = () => {
        console.log("Click Del");
    }

    renderButton = () => {


        return (
            <>
                <Button id="view-button" onPress={this.onView}>View Cards</Button>
                <Button id="add-button" onPress={this.onAdd}>Add Cards</Button>
                <Button id ="del-button" onPress={this.onDel}>Delete Cards</Button>
            </>

        )
    }


    render(){
        const {view} = this.state;

        const buttons = view ? <Cards/> : <this.renderButton/>

        return(
            <View >
                {buttons}
            </View>
            
        )
    }
}

export default Menu;






const styles = StyleSheet.create({


});

