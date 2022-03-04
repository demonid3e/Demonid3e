import "./meat-day";
import { Component } from "react";

class MeatDay extends Component {
    constructor(props){
        super(props);
        this.state = {

            
        }
    }


    render () {
        return (
            <div className="meat-day">
                <form className="day-selector">
                    <div className="form-check form-switch">
                        <input className="form-check-input" id="1" type="checkbox" name="Sunday" onChange={e => {this.props.onDays(e)}} checked={this.props.data.Sunday}/>
                        <label className="form-check-label"  >Sunday</label>
                    </div>
                    <div className="form-check form-switch">                    
                        <input className="form-check-input" id="2" type="checkbox" name="monday" onChange={this.props.onDays} checked={this.state.monday} /> 
                        <label className="form-check-label" >Monday</label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" id="3" type="checkbox" name="tuesday" onChange={this.props.onDays}  checked={this.state.tuesday}/>
                        <label className="form-check-label" >Tuesday</label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" id="4" type="checkbox" name="wednesday" onChange={this.props.onDays} checked={this.state.wednesday}/>
                        <label className="form-check-label" >Wednesday</label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" id="5" type="checkbox" name="thursday" onChange={this.props.onDays} checked={this.state.thursday} />
                        <label className="form-check-label" >Thursday</label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" id="6" type="checkbox" name="friday" onChange={this.props.onDays} checked={this.state.friday} />
                        <label className="form-check-label" >Friday</label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" id="7" type="checkbox" name="saturday" onChange={this.props.onDays} checked={this.state.saturday} />
                        <label className="form-check-label" >Saturday</label>
                    </div>
                </form>
            </div>
            )
    }
    
}


export default MeatDay;