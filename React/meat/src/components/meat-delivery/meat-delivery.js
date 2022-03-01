import "./meat-delivery.css";
import { Component } from "react";
import MeatDeliveryItem from "./meat-delivery-item/meat-delivery-item";


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
                <MeatDeliveryItem onDelivery={this.props.onDelivery} id="delivery-beef" text="Beef: " name="Beef"/>
                <MeatDeliveryItem onDelivery={this.props.onDelivery} id="delivery-gammon" text="Gammon: " name="Gammon"/>
                <MeatDeliveryItem onDelivery={this.props.onDelivery} id="delivery-turkey" text="Turkey: " name="Turkey"/>
                <MeatDeliveryItem onDelivery={this.props.onDelivery} id="delivery-pork" text="Pork: " name="Pork"/>
                </form>
            </div>
        )
    }
}

export default MeatDelivery;