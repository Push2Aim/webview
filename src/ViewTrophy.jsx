import React, {Component} from "react";
// import "./ViewText.css";

class ViewTrophy extends Component {
    render() {
        return (
            <div className="ViewTrophy">
                <img src={this.props.image} role="presentation"/>
                <p>{this.props.text}</p>
            </div>
        );
    }
}

export default ViewTrophy;
