import React, {Component} from "react";
import ViewText from "./ViewText.jsx";
import ViewStretch from "./ViewStretch.jsx";
import ViewAMRAPInfo from "./ViewAMRAPInfo.jsx";
import ViewAMRAP from "./ViewAMRAP.jsx";
import ViewTrophy from "./ViewTrophy.jsx";
import config from "./config";
import "./WebViewer.css";

class WebViewer extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            mIndex: 5
        }
    }

    render() {
        return (
            <div className="WebViewer" onClick={this.handleClick.bind(this)}>
                { this.getWorkout(0,this.state.mIndex) }
            </div>
        );
    }

    getWorkout(cIndex, mIndex) {
        mIndex = mIndex || 0;
        cIndex = cIndex || 0;
        return this.mapWorkout(config[cIndex].messages[mIndex]);
    }

    mapWorkout(message) {
        switch (message.type) {
            case 1:
                return <ViewText text={message.speech}/>;
            case 2:
                return <ViewStretch image={message.imageUrl} duration={message.duration}/>;
            case 3:
                return <ViewAMRAPInfo text={message.speech} image={message.imageUrl} />;
            case 4:
                return <ViewAMRAP text={message.speech} image={message.imageUrl} />;
            case 5:
                return <ViewTrophy text={message.speech} image={message.imageUrl} />;
            default:
                return <p>unknown Type: {message.type}</p>;
        }
    }

    handleClick() {
        this.setState({
           mIndex: this.state.mIndex + 1
        });
    }
}

export default WebViewer;
