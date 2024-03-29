import {View, StyleSheet} from "react-native";
import {Text, Paragraph, Button, Title, Dialog, Portal, Provider} from "react-native-paper";
import {Component} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';



class CardItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: null,
            id: 1,
            disabled: false,
            deleteDialog: false,
            answer: false                  
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
          this.setState({name: JSON.parse(name)});
          console.log(this.state.name, "im load");
        }
  
      } catch (err) {
        alert(err);
      }finally{
      }
    }

    componentDidMount () {
      this.setState({name: null});
        this.loadCard();
  

    }

    nextButton = () => {
      this.loadCard();
      if (this.state.id == this.state.name.length){
        this.setState({id: 1});
      } else {          
          this.setState({id: this.state.id + 1});
          console.log(this.state.name, "Next Button");
      }
    }

    prevButton = () => {
      this.loadCard();
      if (this.state.id === 1){
        this.setState({id: this.state.name.length})
      } else {
        this.setState({id: this.state.id - 1});
        console.log(this.state.name, "Prev Button");
      }

    }
    onDel = () => {
      this.setState({deleteDialog: !this.state.deleteDialog});
      this.returnDialog();
      this.loadCard();
      console.log(this.state.name, "on del");
  }

  onDeleteThisCard = () => {
    const currentArray = [...this.state.name];
    const filteredArray = currentArray.filter(obj => obj.id != this.state.id);
    for (var i=0, id=1; i < filteredArray.length; i++, id++) {
      filteredArray[i].id = id;
    }   
    this.saveCard(filteredArray);
    this.loadCard();
    this.setState({deleteDialog: false});
    this.setState({id: 1});

 }



  returnDialog = () => {
    if (this.state.deleteDialog) {
      return (
        <View style={{marginBottom: 100}}>
          <Portal>
            <Dialog visible="true" style={styles.alert} >
              <Dialog.Title>Delete this card</Dialog.Title>
              <Dialog.Content>
                <Paragraph>Do you want to delete this card?</Paragraph>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={() => this.onDeleteThisCard()} >Yes</Button>
                
                <Button onPress={() => this.setState({deleteDialog: !this.state.deleteDialog})}>No</Button>
              </Dialog.Actions>
            </Dialog>

          </Portal>
      </View>
      )
    } else {
      return null
      }

  }

  returnAnswer = () => {
    console.log("returning answerr");

   
  }
    
  onPressAnswer = () => {
    this.setState({answer: true});
    console.log(this.state);
  }


    render(){
      const answerItem = this.state.answer ? this.state.name.map((item, i) => {
        if (item.id === this.state.id){
          return (
            <View key={Math.random(i)} style={{marginBottom: 100}}>
              <Portal>
                <Dialog visible="true"  >      
                  <Dialog.Content>
                    <Paragraph style={styles.alert}>{item.answer}</Paragraph>
                  </Dialog.Content>
                  <Dialog.Actions>
                    <Button onPress={() => this.setState({answer: false})} >Ok</Button>
                  </Dialog.Actions>
                </Dialog>
              </Portal>
            </View>
          )}
      }) : null;


      const mapItems =  this.state.name ? this.state.name.map((item, i) => {
      const styled = this.state.deleteDialog ? "none" : "flex";
      if (item.id === this.state.id) {
        return (
          <View key={Math.random(i)}>
            <View>
              {this.returnDialog()}
            </View>
            <View style={{display: styled}}>
              <View style={styles.question} >
                <Title 
                style={styles.title} 
                // onPress ={ () => alert(`${item.answer}`)}
                onPress={() => this.onPressAnswer()}
                id="title">{item.title}</Title>
                <Text style={styles.questionText} onPress={() => this.onPressAnswer()} >{item.question}</Text>
                <Button id ="del-button" onPress={this.onDel}>Delete This Card</Button>
              </View>
              <View style={styles.buttonsSides}>
                
                <Button onPress={this.prevButton}>Previous</Button>
                <Button onPress={this.nextButton}>Next</Button>
              </View>
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
              {answerItem}
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

    
  },
  questionText: {
    marginBottom: 20,
    alignContent: "center",
    fontSize: 20
  },
  title: {
    marginTop: 20
  },
  alert: {
    // width: 350,
    // height: 200,
    //  position: "absolute",
    // marginTop: 100,
    // marginBottom: 250,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: "center",
    fontSize: 20
  }
  

});

