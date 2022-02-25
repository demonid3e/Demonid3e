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
        const beef = e.target.value;
        this.setState({ beef });
        this.props.onUpdate(beef);
        console.log(this.state);
      };
    render () {
        const {beef, gammon, turkey, pork} = this.state;
        return (
            <div className="meat-input">
                <h1>Please Enter how many Joints you have in stock:</h1>
                <form className="meat-input-form">
                    <label htmlFor="input-beef"> Beef: </label>
                    <input type="number" id="input-beef" value={beef} onChange={this.onUpdate} className="input"/>
                    <label htmlFor="input-gammon"> Gammon: </label>
                    <input type="number" id="input-gammon" value={gammon} onChange={this.onUpdate} className="input"   step="0.01"/>
                    <label htmlFor="input-turkey"> Turkey: </label>        
                    <input type="number" id="input-turkey" value={turkey} onChange={this.onUpdate} className="input"    step="0.01"/>
                    <label htmlFor="input-pork"> Pork: </label>
                    <input type="number" id="input-pork" value={pork} onChange={this.onUpdate} className="input"   step="0.01" />

                </form>
            </div>
        )
    }
}

export default MeatInput;