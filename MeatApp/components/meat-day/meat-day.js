import { Component } from "react";
import {TextInput,Switch, Text, StyleSheet,View, ScrollView} from "react-native";

class MeatDay extends Component {
    constructor(props){
        super(props);
        this.state = {

            
        }
    }



    render () {
        let {Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday} = this.props.props;

        return (
            <>
            <View style={style.rowContainer}>
                <Text style={style.text}>Sunday</Text>
                <Switch 
                    name="Sunday"
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={this.props.props.Sunday ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={this.props.onSwitch("Sunday")}
                    value={Sunday}
                />
            </View>

            <View style={style.rowContainer}>
                <Text style={style.text}>Monday</Text>
                <Switch 
                    name="Monday"
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={this.props.props.Monday ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={this.props.onSwitch("Monday")}
                    value={Monday}
                />
            </View>

            <View style={style.rowContainer}>
                <Text style={style.text}>Tuesday</Text>
                <Switch 
                    name="Tuesday"
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={this.props.props.Tuesday ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={this.props.onSwitch("Tuesday")}
                    value={Tuesday}
                />
            </View>

            <View style={style.rowContainer}>
                <Text style={style.text}>Wednesday</Text>
                <Switch 
                    name="Wednesday"
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={this.props.props.Wednesday ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={this.props.onSwitch("Wednesday")}
                    value={Wednesday}
                />
            </View>

            <View style={style.rowContainer}>
                <Text style={style.text}>Thursday</Text>
                <Switch 
                    name="Thursday"
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={this.props.props.Thursday ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={this.props.onSwitch("Thursday")}
                    value={Thursday}
                />
            </View>

            <View style={style.rowContainer}>
                <Text style={style.text}>Friday</Text>
                <Switch 
                    name="Friday"
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={this.props.props.Friday ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={this.props.onSwitch("Friday")}
                    value={Friday}
                />
            </View>

            <View style={style.rowContainer}>
                <Text style={style.text}>Saturday</Text>
                <Switch 
                    name="Saturday"
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={this.props.props.Saturday ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={this.props.onSwitch("Saturday")}
                    value={Saturday}
                />
            </View>

            
            </>
            )
    }
    
}

const style = StyleSheet.create({
    container: {
      padding: 8,
      backgroundColor: "#ffffff",
    },
    rowContainer: {
      flexDirection: 'row'
    },
    text: {
        fontSize: 20,
        margin: 10,
        
    }
  }); 



export default MeatDay;