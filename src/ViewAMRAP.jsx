import React, {Component} from "react";
import Clock from "./Clock";
import "./ViewAMRAP.css";

class ViewAMRAP extends Component {
    render() {
        return (
            <div className="ViewAMRAP">
                <Clock duration={this.props.duration}/>
                <img src={this.props.image} role="presentation"/>
                <button className="btn-start">start</button>
            </div>
        );
    }
}

export default ViewAMRAP;
