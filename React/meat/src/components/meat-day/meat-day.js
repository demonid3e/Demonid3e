import "./meat-day";
import { Component } from "react";

class MeatDay extends Component {
    constructor(props){
        super(props);
        this.state = {
                sunday: false,
                monday: false,
                tuesday: false,
                wednesday: false,
                thursday: false,
                friday: false,
                saturday: false
            
        }
        this.test = (e) => {
            if (this.state[e.target.name] !== e.target.checked) {
                // const newArr =  Object.entries(this.state);
                // newArr.filter(name => name.includes(e.target.name)).map(filteredName => console.log(filteredName[0]));
                this.setState({[e.target.name]: !this.state[e.target.name]});                
            }
   
        }

    }

    render () {
        return (
            <div className="meat-day">
                <form className="day-selector">
                    <div className="form-check form-switch">
                        <input className="form-check-input" id="1" type="checkbox" name="sunday" onChange={this.test} checked={this.state.sunday}/>
                        <label className="form-check-label"  >Sunday</label>
                    </div>
                    <div className="form-check form-switch">                    
                        <input className="form-check-input" id="2" type="checkbox" name="monday" onChange={this.test} checked={this.state.monday} /> 
                        <label className="form-check-label" >Monday</label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" id="3" type="checkbox" name="tuesday" onChange={this.test}  checked={this.state.tuesday}/>
                        <label className="form-check-label" >Tuesday</label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" id="4" type="checkbox" name="wednesday" onChange={this.test} checked={this.state.wednesday}/>
                        <label className="form-check-label" >Wednesday</label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" id="5" type="checkbox" name="thursday" onChange={this.test} checked={this.state.thursday} />
                        <label className="form-check-label" >Thursday</label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" id="6" type="checkbox" name="friday" onChange={this.test} checked={this.state.friday} />
                        <label className="form-check-label" >Friday</label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" id="7" type="checkbox" name="saturday" onChange={this.test} checked={this.state.saturday} />
                        <label className="form-check-label" >Saturday</label>
                    </div>
                </form>
            </div>
            )
    }
    
}


export default MeatDay;