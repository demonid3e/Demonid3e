import { Component } from "react";


class MeatInputItem extends Component {
    constructor(props){
        super(props); 
        this.state =  {

        }       
    }

    onUpdate = (e) => {
        // state is current state, function is used so there is no problem assync changing of state
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state);
      };
    render () {
        return (
            <div className="meat-input-item">
                <label htmlFor={this.props.id}> {this.props.text} </label>
                <input type="number" name={this.props.name} id={this.props.id}  onChange={this.onUpdate} className="input"/>
            </div>
        )
    }
}

export default MeatInputItem