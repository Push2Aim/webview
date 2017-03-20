import React, {Component} from "react";
import config from "./config";
import Welcome from "./Welcome";
import Warmup from "./Warmup";
import Stretching from "./Stretching";
import AMRAPtut from "./AMRAPtut";
import AMRAP from "./AMRAP";
import Trophy from "./Trophy";
// import "./webflow.css";

class WebViewer extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            cIndex: this.getCIndex(props.location, props.duration),
        }
    }

    nextSlide() {
        window.$("#nextSlide").trigger("tap");
        this.updateSliderIndex()
    }

    updateSliderIndex() {
        let sliderIndex = 0;
        let dots = window.$("#SliderNav").children();
        for (let i = 0; i < dots.length; i++)
            if (dots.eq(i).hasClass("w-active")){
                sliderIndex = i;
                break;
            }
        document.title = config[this.state.cIndex].data[sliderIndex].title;
    }

    render() {
        this.updateSliderIndex();
        return (
            <div className="slider w-slider" data-animation="slide" data-duration="400" data-easing="ease-in"
                 data-infinite="1">
                <div className="w-slider-mask">
                    {this.buildView(this.state.cIndex)}
                </div>
                <div onClick={this.updateSliderIndex.bind(this)} className="w-slider-arrow-left">
                    <div className="w-icon-slider-left"></div>
                </div>
                <div onClick={this.updateSliderIndex.bind(this)} className="w-slider-arrow-right" id="nextSlide">
                    <div className="w-icon-slider-right"></div>
                </div>
                <div onClick={this.nextSlide.bind(this)} className="start-workout-button" data-ix="start-button-blink">
                    <div>Start</div>
                </div>
                <div onClick={this.updateSliderIndex.bind(this)} className="w-round w-slider-nav" id="SliderNav"></div>
            </div>
        );
    }

    buildView(cIndex) {
        return config[cIndex].data.map(this.mapWorkout);
    }

    mapWorkout(data, cIndex = this.state.cIndex) {
        switch (data.type) {
            case "Welcome":
                return  <Welcome data={data}/>;
            case "Warmup":
                return <Warmup data={data} cIndex={cIndex}/>;
            case "Stretching":
                return  <Stretching data={data} cIndex={cIndex}/>;
            case "AMRAPtut":
                return <AMRAPtut data={data} cIndex={cIndex}/>;
            case "AMRAP":
                return  <AMRAP data={data} cIndex={cIndex}/>;
            case "Trophy":
                return  <Trophy data={data}/>;
            default:
                return <p>unknown Type: {data.type}</p>;
        }
    }

    getWorkout(mIndex = this.state.mIndex, cIndex = this.state.cIndex) {
        return this.mapWorkout(config[cIndex].data[mIndex]);
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
