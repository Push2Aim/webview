import React, {Component} from "react";
import config from "./config";
import "./webflow.css";
import Welcome from "./Welcome";
import Warmup from "./Warmup";
import Stretching from "./Stretching";
import AMRAPtut from "./AMRAPtut";
import AMRAP from "./AMRAP";
import Trophy from "./Trophy";

class WebViewer extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            cIndex: this.getCIndex(props.location, props.duration)
        }
    }

    render() {
        document.title = this.props.location + this.props.duration;
        return (
            <div className="slider w-slider" data-animation="slide" data-duration="400" data-easing="ease-in"
                 data-infinite="1">
                <div className="w-slider-mask">
                    {this.buildView(this.state.cIndex)}
                </div>
                <div className="slide-nav w-round w-slider-nav"></div>
            </div>
        );
    }

    buildView(cIndex) {
        return config[cIndex].data.map(this.mapWorkout);
    }

    mapWorkout(data) {
        switch (data.type) {
            case "Welcome":
                return  <Welcome data={data}/>;
            case "Warmup":
                return  <Warmup data={data}/>;
            case "Stretching":
                return  <Stretching data={data}/>;
            case "AMRAPtut":
                return  <AMRAPtut data={data}/>;
            case "AMRAP":
                return  <AMRAP data={data}/>;
            case "Trophy":
                return  <Trophy data={data}/>;
            default:
                return <p>unknown Type: {data.type}</p>;
        }
    }

    getWorkout(mIndex = this.state.mIndex, cIndex = this.state.cIndex) {
        return this.mapWorkout(config[cIndex].data[mIndex]);
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
