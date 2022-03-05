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
                    <div className="form-check form-switch day-item">
                        <input style={{width: "50px"}} className="form-check-input" id="1" type="checkbox" name="Sunday" onChange={e => {this.props.onDays(e)}} checked={this.props.data.Sunday}/>
                        <label className="form-check-label"  >Sunday</label>
                    </div>
                    <div style={{width: "50px"}} className="form-check form-switch day-item">                    
                        <input className="form-check-input" id="2" type="checkbox" name="Monday" onChange={e => {this.props.onDays(e)}} checked={this.props.data.Monday} /> 
                        <label className="form-check-label" >Monday</label>
                    </div>
                    <div className="form-check form-switch  day-item">
                        <input className="form-check-input" id="3" type="checkbox" name="Tuesday" onChange={e => {this.props.onDays(e)}}  checked={this.props.data.Tuesday}/>
                        <label className="form-check-label" >Tuesday</label>
                    </div>
                    <div className="form-check form-switch day-item">
                        <input className="form-check-input" id="4" type="checkbox" name="Wednesday" onChange={e => {this.props.onDays(e)}} checked={this.props.data.Wednesday}/>
                        <label className="form-check-label" >Wednesday</label>
                    </div>
                    <div className="form-check form-switch day-item">
                        <input className="form-check-input" id="5" type="checkbox" name="Thursday" onChange={e => {this.props.onDays(e)}} checked={this.props.data.Thursday} />
                        <label className="form-check-label" >Thursday</label>
                    </div>
                    <div className="form-check form-switch day-item">
                        <input className="form-check-input" id="6" type="checkbox" name="Friday" onChange={e => {this.props.onDays(e)}} checked={this.props.data.Friday} />
                        <label className="form-check-label" >Friday</label>
                    </div>
                    <div className="form-check form-switch day-item" style={{width: "50px"}}>
                        <input className="form-check-input" id="7" type="checkbox" name="Saturday" onChange={e => {this.props.onDays(e)}} checked={this.props.data.Saturday} />
                        <label className="form-check-label" >Saturday</label>
                    </div>
                </form>
            </div>
            )
    }
    
}


export default MeatDay;