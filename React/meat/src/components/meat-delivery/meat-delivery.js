import "./meat-delivery.css";
import { Component } from "react";


class MeatDelivery extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="meat-delivery">
                <h1>Please Enter how many Joints you are expecting on Delivery:</h1>
                <form className="meat-delivery-form">
                    <label htmlFor="input-beef"> Beef: </label>
                    <input type="number" id="delivery-beef" className="input" placeholder="0" step="0.01"/>
                    <label htmlFor="input-gammon"> Gammon: </label>
                    <input type="number" id="delivery-gammon" className="input" placeholder="0" step="0.01"/>
                    <label htmlFor="input-turkey"> Turkey: </label>        
                    <input type="number" id="delivery-turkey" className="input"  placeholder="0" step="0.01"/>
                    <label htmlFor="input-pork"> Pork: </label>
                    <input type="number" id="delivery-pork" className="input" placeholder="0" step="0.01" />

                </form>
            </div>
        )
    }
}

export default MeatDelivery;