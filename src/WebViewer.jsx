import React, {Component} from "react";
import config from "./config";
import Welcome from "./Welcome";
import Warmup from "./Warmup";
import Stretching from "./Stretching";
import AMRAPtut from "./AMRAPtut";
import AMRAP from "./AMRAP";
import Trophy from "./Trophy";
import Break from "./Break";
import "./webflow.css";

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
        if (document.title !== config[this.state.cIndex].data[sliderIndex].title)
            document.title = config[this.state.cIndex].data[sliderIndex].title;
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.updateSliderIndex(), 500);
    }

    render() {
        this.updateSliderIndex();
        return (
            <div className="slider w-slider" data-animation="slide" data-disable-swipe="0" data-duration="500"
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
                <div onClick={this.nextSlide.bind(this)} className="start-workout-button" data-ix="disappear-start-button">
                    <div>Start</div>
                </div>
                <div onClick={this.updateSliderIndex.bind(this)} className="slide-nav-2 w-round w-slider-nav" id="SliderNav"></div>
            </div>
        );
    }

    buildView(cIndex) {
        return config[cIndex].data.map((data, index) =>
            this.mapWorkout(data, index, this.state.cIndex)
        );
    }

    mapWorkout(data, sIndex, cIndex) {
        switch (data.type) {
            case "Welcome":
                return <Welcome data={data} sIndex={sIndex}/>;
            case "Warmup":
                return <Warmup data={data} cIndex={cIndex} sIndex={sIndex}/>;
            case "Stretching":
                return <Stretching data={data} cIndex={cIndex} sIndex={sIndex}/>;
            case "Break":
                return <Break data={data} cIndex={cIndex} sIndex={sIndex}/>;
            case "AMRAPtut":
                return <AMRAPtut data={data} cIndex={cIndex}/>;
            case "AMRAP":
                return <AMRAP data={data} cIndex={cIndex} sIndex={sIndex}/>;
            case "Trophy":
                return <Trophy data={data} sIndex={sIndex} token={this.props.token}
                               url={this.props.url}/>;
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
        duration = Number.parseInt(duration, 10);
        if (!duration) return 30;
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
