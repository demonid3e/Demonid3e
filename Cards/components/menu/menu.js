import {View, StyleSheet} from "react-native";
import {Text, Paragraph, Button, Title} from "react-native-paper";
import {Component} from "react";
import Cards from "../cards/cards";
import AddCards from "../add-cards/add-cards"


class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            view: false,
            add: false
        }
    }


    onView = () => {

        console.log("Click View");
        this.setState({view: true})
        console.log(this.state);
    }

    onAdd = () => {
        console.log("Click Add");
        this.setState({add: true});
        console.log(this.state);
    }

    onDel = () => {
        const resetAnswer = prompt("Would you like to delete this card?");
        console.log(resetAnswer);
        console.log("Click Del");
    }



    renderButton = () => {


        return (
            <>
                <Button id="view-button" onPress={this.onView}>View Cards</Button>
                {/* <Button id="add-button" onPress={this.onAdd}>Add Cards</Button> */}
            </>

        )
    }


    render(){
        const {view, add} = this.state;

        const buttons = view ? <Cards/> : <this.renderButton styles={{marginTop: 20}}/>;
        const addCards = add ? <AddCards/> : null;

        return(
            <View >
                {buttons}
                {addCards}
                <AddCards/>
            </View>
            
        )
    }
}

export default Menu;






const styles = StyleSheet.create({
    

});

