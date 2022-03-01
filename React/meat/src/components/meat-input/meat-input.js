import { Component } from "react";
import "./meat-input.css";
import MeatInputItem from "./meat-input-item/meat-input-item";

class MeatInput extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        
    }
    
    render () {
        return (
            <div className="meat-input">
                <h1>Please Enter how many Joints you have in stock:</h1>
                <form className="meat-input-form">
                    <MeatInputItem onUpdate={this.props.onUpdate} id="input-beef" name="Beef" text="Beef: " />
                    <MeatInputItem onUpdate={this.props.onUpdate} id="input-gammon" name="Gammon" text="Gammon: "/>
                    <MeatInputItem onUpdate={this.props.onUpdate} id="input-turkey" name="Turkey" text="Turkey: "/>
                    <MeatInputItem onUpdate={this.props.onUpdate} id="input-pork" name="Pork" text="Pork: " />
                </form>
            </div>
        )
    }
}

export default MeatInput;