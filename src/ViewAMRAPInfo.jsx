import React, {Component} from "react";
import "./ViewAMRAPInfo.css";

class ViewAMRAPInfo extends Component {
    render() {
        return (
            <div className="ViewAMRAPInfo">
                <img src={this.props.image} role="presentation"/>
                <p>{this.props.text}</p>
                <button className="btn-left">start</button>
                <button className="btn-right">help</button>
            </div>
        );
    }
}

export default ViewAMRAPInfo;
