import "./meat-delivery-item";
import { Component } from "react";

class MeatDeliveryItem extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render (){

        return (
            
            <div className="meat-delivery-items">
                <label htmlFor={this.props.id}>{this.props.text}</label>
                <input onWheel={(e) => e.target.blur()} type="number" onChange={e => {this.props.onDelivery(e.target.name, e.target.value)}} id={this.props.id} name={this.props.name} className="input" placeholder="0" step="0.01"/>
            </div>

        )
    }

}

export default MeatDeliveryItem;