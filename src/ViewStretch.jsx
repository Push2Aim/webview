import React, {Component} from "react";
import Clock from "./Clock";
import "./ViewStretch.css";

class ViewStretch extends Component {
    render() {
        return (
            <div className="ViewStretch">
                <Clock duration={this.props.duration}/>
                <button className="btn-start">start</button>
                <img src={this.props.image} role="presentation"/>
            </div>
        );
    }
}

export default ViewStretch;
