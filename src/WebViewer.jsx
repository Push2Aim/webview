import React, {Component} from "react";
import Clock from "./Clock";
import config from "./config";
import "./WebViewer.css";

class WebViewer extends Component {
    render() {
        return (
            <div>
                { this.getWorkout() }
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

    getWorkout(index) {
        index = index || 0;
        return config[index].messages.map((message)=>{
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
        });
    }

    addClock(duration) {
        duration = duration || 5;
        return <Clock duration={duration}/>
    }
}

export default WebViewer;
