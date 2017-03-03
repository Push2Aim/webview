import React, {Component} from "react";
import Clock from "./Clock";
import "./ViewAMRAP.css";

class ViewAMRAP extends Component {
    render() {
        return (
            <div className="ViewAMRAP">
                <Clock duration={this.props.duration}/>
                <button className="btn-start">start</button>
                <img src={this.props.image} role="presentation"/>
            </div>
        );
    }
}

export default ViewAMRAP;
