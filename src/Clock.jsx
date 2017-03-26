import React, {Component} from "react";
import "./Clock.css";
import config from "./config";


function FormattedTimer(props) {
    let date = new Date(0);
    date.setSeconds(props.timer);
    if (props.started && date.getHours()===1)
        return <h1 id="countdown">{date.getMinutes() + ":" + date.getSeconds()}</h1>;
    else
        return <div className="get-ready" data-ix="get-ready-appear-disappear">get ready</div>;
}

class Clock extends Component {
    constructor(props, context) {
        super(props, context);
        let date = new Date();
        date.setSeconds(date.getSeconds() + props.duration);
        this.state = {
            style: {},
            started: false,
            countdown: props.duration,
            waitStarted: false,
            wait: this.props.wait || 5,
        }
    }

    render() {
        return (
            <div className="wrapper Clock"
                 onClick={this.setAnimations.bind(this)}
                 style={this.state.style}>
                <div className="pie spinner"
                     style={this.state.style}></div>
                <div className="pie filler"
                     style={this.state.style}></div>
                <div className="mask"
                     style={this.state.style}></div>
                <FormattedTimer started={this.state.started} timer={this.state.countdown}/>
            </div>
        );
    }

    setAnimations() {
        this.setState({
            style: {
                animationPlayState: "running",
                animationDuration: this.props.duration + "s",
            }
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
        if (this.isOnCurrentSlide()) {
            if (this.finishedWaiting()) {
                this.setState((prevState, props) => ({
                    countdown: prevState.countdown - 1,
                }));

                if (this.state.countdown < 0) {
                    this.setState({started: false});
                    this.nextSlide();
                }
            } else
                this.setState({waitStarted: true})
        }
    }

    isOnCurrentSlide() {
        return this.props.sIndex === this.getSliderIndex();
    }

    finishedWaiting() {
        if (this.state.waitStarted) {
            this.setState((prevState, props) => ({
                wait: prevState.wait - 1
            }));
            if (this.state.wait < 0) {
                this.setState({waitStarted: false, started: true});
                this.setAnimations();
            }
        }

        return this.state.started;
    }

    nextSlide() {
        if(!this.props.disableNext)
            window.$("#nextSlide").trigger("tap");
        this.updateSliderIndex();
    }

    updateSliderIndex() {
        let sliderIndex = this.getSliderIndex();
        if (this.props.cIndex)
        document.title = config[this.props.cIndex].data[sliderIndex].title;
    }

    getSliderIndex() {
        let dots = window.$("#SliderNav").children();
        for (let i = 0; i < dots.length; i++)
            if (dots.eq(i).hasClass("w-active")) {
                return i;
            }
        return 0;
    }
}

export default Clock;
