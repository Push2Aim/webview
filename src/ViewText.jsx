import React, {Component} from "react";
import "./ViewText.css";

class ViewText extends Component {
    render() {
        return (
            <div className="TextViewer">
                <p className="intro_rectangle">{this.props.text}</p>
                <button>start</button>
            </div>
        );
    }
}

export default ViewText;
