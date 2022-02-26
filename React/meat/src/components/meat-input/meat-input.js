import { Component } from "react";
import "./meat-input.css";
import MeatInputItem from "./meat-input-item/meat-input-item";

class MeatInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
        beef: 0,
        gammon: 0,
        turkey: 0,
        pork: 0
        }
        
    }
    
    onUpdate = (e) => {
        // state is current state, function is used so there is no problem assync changing of state
        this.setState(state => ({ [e.target.name]: e.target.value }));
        console.log(this.state);
      };
    render () {
        return (
            <div className="meat-input">
                <h1>Please Enter how many Joints you have in stock:</h1>
                <form className="meat-input-form">
                    <MeatInputItem id="input-beef" name="beef" text="Beef: " />
                    <MeatInputItem id="input-beef" name="beef" text="Beef: "/>
                    <MeatInputItem id="input-beef" name="beef" text="Beef: "/>
                    <MeatInputItem id="input-beef" name="beef" text="Beef: " />
                </form>
            </div>
        )
    }
}

export default MeatInput;