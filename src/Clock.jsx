import React, {Component} from "react";
import "./Clock.css";

class Clock extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            animations: ["", "", "", ""]
        }
    }

    render() {
        return (
            <div className="wrapper Clock"
                 onClick={this.setAnimations.bind(this)}
                 style={{animation: this.state.animations[0]}}>
                <div className="pie spinner"
                     style={{animation: this.state.animations[1]}}></div>
                <div className="pie filler"
                     style={{animation: this.state.animations[2]}}></div>
                <div className="mask"
                     style={{animation: this.state.animations[3]}}></div>
            </div>
        );
    }
    setAnimations() {
        this.setState({
            animations: [
                "size " + this.props.duration + "s cubic-bezier(0.86, 0, 0.07, 1) 1 forwards",
                "rota " + this.props.duration + "s linear 1 forwards",
                "opa " + this.props.duration + "s steps(1, end) 1 reverse forwards",
                "opa " + this.props.duration + "s steps(1, end) 1 forwards"
            ]
        });
    }
}

export default Clock;
