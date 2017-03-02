import React, {Component} from "react";
import "./ViewTrophy.css";

class ViewTrophy extends Component {
    render() {
        return (
            <div className="ViewTrophy">
                <img src={this.props.image} role="presentation"/>
                <p className="intro_rectangle">{this.props.text}</p>
            </div>
        );
    }
}

export default ViewTrophy;
