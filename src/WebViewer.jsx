import React, {Component} from "react";
import Clock from "./Clock";
import config from "./config";
import "./WebViewer.css";

class WebViewer extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            mIndex: 0
        }
    }

    render() {
        return (
            <div className="WebViewer">
                { this.getWorkout(0,this.state.mIndex) }
                <button onClick={this.handleClick.bind(this)}>Got it!</button>
            </div>
        );
    }

    addText(text) {
        text = text || "Look at this beautiful Text";
        return <p>{text}</p>;
    }

    addImage(imageUrl) {
        return <img src={imageUrl} role="presentation"/>;
    }

    getWorkout(cIndex, mIndex) {
        mIndex = mIndex || 0;
        cIndex = cIndex || 0;
        return this.mapWorkout(config[cIndex].messages[mIndex]);
    }

    mapWorkout(message) {
        switch (message.type) {
            case 0:
                return this.addText(message.speech);
            case -1:
                return this.addClock(message.duration);
            case 3:
                return this.addImage(message.imageUrl);
            default:
                return this.addText("unknown Type: " + message.type);
        }
    }

    addClock(duration) {
        duration = duration || 5;
        return <Clock duration={duration}/>
    }

    handleClick() {
        this.setState({
           mIndex: this.state.mIndex + 1
        });
    }
}

export default WebViewer;
