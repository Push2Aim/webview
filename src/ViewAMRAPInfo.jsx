import React, {Component} from "react";
// import "./ViewText.css";

class ViewAMRAPInfo extends Component {
    render() {
        return (
            <div className="ViewAMRAP_info">
                <p>{this.props.text}</p>
                <img src={this.props.image} role="presentation"/>
                <button>start</button>
                <button>help</button>
            </div>
        );
    }
}

export default ViewAMRAPInfo;
