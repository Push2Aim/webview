import React, {Component} from "react";
import Clock from "./Clock";
import "./ViewStretch.css";

class ViewStretch extends Component {
    render() {
        return (
            <div className="ViewStretch">
                {this.getClock()}
                <button className="btn-start">start</button>
                <img src={this.props.image} role="presentation"/>
            </div>
        );
    }

    getClock() {
        return this.props.duration ?
            (<Clock duration={this.props.duration}/>):
            <div className="Clock circle"></div>;
    }
}

export default ViewStretch;
