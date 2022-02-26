import { Component } from "react";
import "./meat-input.css";

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
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state);
      };
    render () {
        return (
            <div className="meat-input">
                <h1>Please Enter how many Joints you have in stock:</h1>
                <form className="meat-input-form">
                    <label htmlFor="input-beef"> Beef: </label>
                    <input type="number" name="beef" id="input-beef"  onChange={this.onUpdate} className="input"/>
                    <label htmlFor="input-gammon"> Gammon: </label>
                    <input type="number" name="gammon" id="input-gammon"  onChange={this.onUpdate} className="input"   />
                    <label htmlFor="input-turkey"> Turkey: </label>        
                    <input type="number" name="turkey" id="input-turkey"  onChange={this.onUpdate} className="input"   />
                    <label htmlFor="input-pork"> Pork: </label>
                    <input type="number" name="pork" id="input-pork"  onChange={this.onUpdate} className="input"   />
                </form>
            </div>
        )
    }
}

export default MeatInput;