import React, {Component} from "react";
import Clock from "./Clock";
// import "./ViewStretch.css";

class ViewStretch extends Component {
    render() {
        return (
            <div className="ViewStretch">
                <Clock duration={this.props.duration}/>
                <img src={this.props.image} role="presentation"/>
                <button>start</button>
            </div>
        );
    }
}

export default ViewStretch;
