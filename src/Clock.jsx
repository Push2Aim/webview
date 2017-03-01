import React, {Component} from "react";
import "./Clock.css";

class Clock extends Component {
    render() {
        return (
            <div className="wrapper"
                 style={{animation: "size " + this.props.duration + "s cubic-bezier(0.86, 0, 0.07, 1) 1 forwards"}}>
                <div className="pie spinner"
                     style={{animation: "rota " + this.props.duration + "s linear 1 forwards"}}></div>
                <div className="pie filler"
                     style={{animation: "opa " + this.props.duration + "s steps(1, end) 1 reverse forwards"}}></div>
                <div className="mask"
                     style={{animation: "opa " + this.props.duration + "s steps(1, end) 1 forwards"}}></div>
            </div>
        );
    }
}

export default Clock;
