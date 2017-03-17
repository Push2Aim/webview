import React, {Component} from "react";
import ViewText from "./ViewText.jsx";
import ViewStretch from "./ViewStretch.jsx";
import ViewAMRAPInfo from "./ViewAMRAPInfo.jsx";
import ViewAMRAP from "./ViewAMRAP.jsx";
import ViewTrophy from "./ViewTrophy.jsx";
import config from "./config";
// import "./webflow.css";

import Welcome from "./Welcome"
import Warmup from "./Warmup"
import Stretching from "./Stretching"
import AMRAPtut from "./AMRAPtut"
import AMRAP from "./AMRAP"
import Trophy from "./Trophy"

class WebViewer extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            mIndex: 0,
            cIndex: this.getCIndex(props.location, props.duration)
        }
    }

    render() {
        document.title = this.props.location + this.props.duration;
        return (
            <div className="slider w-slider" data-animation="slide" data-duration="400" data-easing="ease-in"
                 data-infinite="1">
                <div className="w-slider-mask">
                    <Welcome/>
                    <Warmup/>
                    <Stretching/>
                    <AMRAPtut/>
                    <AMRAP/>
                    <Trophy/>
                </div>
                <div className="slide-nav w-round w-slider-nav"></div>
            </div>
        );
    }

    getWorkout(mIndex = this.state.mIndex, cIndex = this.state.cIndex) {
        return this.mapWorkout(config[cIndex].messages[mIndex]);
    }

    mapWorkout(message) {
        switch (message.type) {
            case 1:
                return <ViewText text={message.speech}/>;
            case 2:
                return <ViewStretch image={message.imageUrl} duration={message.duration}/>;
            case 3:
                return <ViewAMRAPInfo text={message.speech} image={message.imageUrl}/>;
            case 4:
                return <ViewAMRAP text={message.speech} image={message.imageUrl}/>;
            case 5:
                return <ViewTrophy text={message.speech} image={message.imageUrl}/>;
            case -2:
                return <ViewStretch image={message.imageUrl}/>;
            default:
                return <p>unknown Type: {message.type}</p>;
        }
    }

    handleClick() {
        this.setState({
            mIndex: this.state.mIndex + 1
        });
    }

    getCIndex(location, duration) {
        location = this.parsLocation(location);
        duration = this.parsDuration(duration);
        console.log(location, duration);
        for (let i = 0; i < config.length; i++) {
            let item = config[i];
            if (location === item.location && duration === item.duration) {
                return i;
            }
        }
        return 0;

    }

    parsDuration(duration) {
        if (!duration || duration === "")
            return 30;

        duration = Number.parseInt(duration, 10);
        return duration <= 5 ? 5 : duration <= 60 ?
                Math.floor(duration / 5) * 5 : 60;
    }

    parsLocation(location) {
        if (location)
            switch (location) {
                case "home":
                case "gym":
                case "outdoor":
                    return location;
                default:
                    return "home";
            }
        else return "home";
    }

}

export default WebViewer;
