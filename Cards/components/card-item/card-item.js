import {View, StyleSheet} from "react-native";
import {Text, Paragraph, Button, Title} from "react-native-paper";
import {Component} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';



class CardItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            test: null,
            id: 1,
            disabled: false
          
          }
    
          } 
  
    loadCard = async () => {
      try {
        let name = await AsyncStorage.getItem("Demon");
        if (name !== null) {
          this.setState({test: JSON.parse(name)});
          console.log(this.state, "im load");
        }
  
      } catch (err) {
        alert(err);
      }finally{
          console.log(this.state, "I`m finally");
      }
    }

    componentDidMount () {
        this.loadCard();
        console.log(this.state, "did mount");
  
        

    }

    nextButton = () => {
      this.loadCard();
      if (this.state.id == this.state.test.length){
        this.setState({id: 1});
      } else {          
          this.setState({id: this.state.id + 1});
          console.log(this.state, "Next Button");
      }
    }

    prevButton = () => {
      
      this.loadCard();
      if (this.state.id === 1){
        this.setState({id: this.state.test.length})
      } else {
        this.setState({id: this.state.id - 1});
        console.log(this.state, "Prev Button");
      }

    }



    render(){
      console.log(this.state, "I`m render");
     const mapItems =  this.state.test ? this.state.test.map(item => {

      if (item.id === this.state.id) {
        return (
          <View style={styles.card} onPress ={ () => alert("press")}>
            <Title onPress ={ () => alert(`${item.answer}`)}   id="title">{item.title}</Title>
            <Text >{item.question}</Text>
            <Button onPress={this.prevButton}>Previous</Button>
            <Button onPress={this.nextButton}>Next</Button>
          </View>
        
        
        )  
      } else {
        return null
      }
     }) : null;

       
        return(
            <View >
              <Text>{this.state.id}</Text>

              {mapItems}
            </View>
            
        )
    }
}

export default CardItem;

const styles = StyleSheet.create({
  card: {
    alignSelf: "center"
  }

});

