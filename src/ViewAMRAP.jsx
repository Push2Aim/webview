import React, {Component} from "react";
import Clock from "./Clock";
// import "./ViewText.css";

class ViewAMRAP extends Component {
    render() {
        return (
            <div className="ViewAMRAP">
                <Clock duration={this.props.duration}/>
                <img src={this.props.image} role="presentation"/>
                <button>start</button>
            </div>
        );
    }
}

export default ViewAMRAP;
