import React, {Component} from "react";
import "./Breath.css";


class Breath extends Component {
    render() {
        let style = {animationDuration: this.props.breathDuration + "s"};
        return (
            <div className="breathing">
                <p style={style}></p>
                <p style={style}></p>
                <p style={style}></p>
                <p style={style}></p>
                <p style={style}></p>
                <p style={style}></p>
            </div>
        );
    }
}

export default Breath;
