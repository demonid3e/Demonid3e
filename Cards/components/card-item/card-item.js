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
          
    saveCard = async (value) => {
      try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem("Demon", jsonValue);
      } catch (err) {
        alert(err);
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
    onDel = () => {
      const resetAnswer = prompt("Would you like to delete this card?");
      if(resetAnswer === "Yes"){
        const currentArray = [...this.state.test];
        const filteredArray = currentArray.filter(obj => obj.id != this.state.id);
        this.saveCard(filteredArray);
        this.loadCard();
        console.log(filteredArray);
        alert("Item deleted");
      } else {
        alert("Item not deleted");
      }
      console.log(resetAnswer);
      console.log("Click Del");
  }





    render(){
      console.log(this.state, "I`m render");
     const mapItems =  this.state.test ? this.state.test.map(item => {

      if (item.id === this.state.id) {
        return (
          <View  onPress ={ () => alert("press")}>
            <View style={styles.question}>
              <Title 
              style={styles.title} 
              onPress ={ () => alert(`${item.answer}`)}   
              id="title">{item.title}</Title>
              <Text style={styles.questionText} >{item.question}</Text>
              <Button id ="del-button" onPress={this.onDel}>Delete This Card</Button>

            </View>
            <View style={styles.buttonsSides}>
              <Button onPress={this.prevButton}>Previous</Button>
              <Button onPress={this.nextButton}>Next</Button>
            </View>
          </View>
        
        
        )  
      } else {
        return null
      }
     }) : null;

       
        return(
            <View style={styles.card} >
              {/* <Text>{this.state.id}</Text> */}

              {mapItems}
            </View>
            
        )
    }
}

export default CardItem;

const styles = StyleSheet.create({
  card: {
    alignSelf: "center",
  },
  buttonsSides: {
    flexDirection: "row"
  },
  buttons: {
    flex: 1

  },
  question: {
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    borderRadius: 5,
    borderWidth: 2
    
  },
  questionText: {
    marginBottom: 20
  },
  title: {
    marginTop: 20
  }
  

});

