import { Component } from "react";
import "./meat-input.css";

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
                    <label htmlFor="input-beef"> Beef: </label>
                    <input type="number" id="input-beef" className="input" placeholder="0" step="0.01"/>
                    <label htmlFor="input-gammon"> Gammon: </label>
                    <input type="number" id="input-gammon" className="input" placeholder="0" step="0.01"/>
                    <label htmlFor="input-turkey"> Turkey: </label>        
                    <input type="number" id="input-turkey" className="input"  placeholder="0" step="0.01"/>
                    <label htmlFor="input-pork"> Pork: </label>
                    <input type="number" id="input-pork" className="input" placeholder="0" step="0.01" />

                </form>
            </div>
        )
    }
}

export default MeatInput;