import React, {Component} from "react";
import "./Clock.css";
import config from "./config";

class Clock extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            animations: ["", "", "", ""],
            started: false,
            countdown: props.duration
        }
    }

    render() {
        return (
            <div className="wrapper Clock"
                 onClick={this.setAnimations.bind(this)}
                 style={{animation: this.state.animations[0]}}>
                <div className="pie spinner"
                     style={{animation: this.state.animations[1]}}></div>
                <div className="pie filler"
                     style={{animation: this.state.animations[2]}}></div>
                <div className="mask"
                     style={{animation: this.state.animations[3]}}></div>
            </div>
        );
    }
    setAnimations() {
        this.setState({
            started: true,
            animations: [
                "size " + this.props.duration + "s cubic-bezier(0.86, 0, 0.07, 1) 1 forwards",
                "rota " + this.props.duration + "s linear 1 forwards",
                "opa " + this.props.duration + "s steps(1, end) 1 reverse forwards",
                "opa " + this.props.duration + "s steps(1, end) 1 forwards"
            ]
        });
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        if (this.state.started) {
            this.setState((prevState, props) => ({
                countdown: prevState.countdown - 1
            }));
            if (this.state.countdown < 0) {
                this.setState({started: false});
                this.nextSlide();
            }
        }
    }

    nextSlide() {
        window.$("#nextSlide").trigger("tap");
        this.updateSliderIndex();
    }

    updateSliderIndex() {
        let sliderIndex = 0;
        let dots = window.$("#SliderNav").children();
        for (let i = 0; i < dots.length; i++)
            if (dots.eq(i).hasClass("w-active")) {
                sliderIndex = i;
                break;
            }
        document.title = config[this.props.cIndex].data[sliderIndex].title;
    }
}

export default Clock;
