import "./meat-delivery.css";
import { Component } from "react";


class MeatDelivery extends Component {
    constructor(props){
        super(props);
        this.state = {
            beef: 0,
            gammon: 0,
            turkey: 0,
            pork: 0

        }
    }
    render() {
        return (
            <div className="meat-delivery">
                <h1>Please Enter how many Joints you are expecting on Delivery:</h1>
                <form className="meat-delivery-form">
                    <label htmlFor="input-beef"> Beef: </label>
                    <input type="number" id="delivery-beef" className="input" placeholder={this.state.beef} step="0.01"/>
                    <label htmlFor="input-gammon"> Gammon: </label>
                    <input type="number" id="delivery-gammon" className="input" placeholder={this.state.gammon} step="0.01"/>
                    <label htmlFor="input-turkey"> Turkey: </label>        
                    <input type="number" id="delivery-turkey" className="input"  placeholder={this.state.turkey} step="0.01"/>
                    <label htmlFor="input-pork"> Pork: </label>
                    <input type="number" id="delivery-pork" className="input" placeholder={this.state.pork}  />

                </form>
            </div>
        )
    }
}

export default MeatDelivery;