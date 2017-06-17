import React, {Component} from "react";
import Clock from "./Clock";

class Welcome extends Component {
    render() {
        return (
            <div className="w-slide">
                <div className="tut-slider w-slider" data-animation="cross" data-duration="500" data-easing="ease-in"
                     data-infinite="1">
                    <div className="w-slider-mask">
                        <div className="w-slide">
                            <div className="content-parent welcome">
                                <div className="turquoise-bg" data-ix="slowly-blend-in"></div>
                                <div className="tut-welcome-supervisor" data-ix="welcome-text-appear"><h1
                                    className="_1-step-closer welcome-to">{this.props.data.texts.title}</h1>
                                    <p className="welcome-what-you-do">{this.props.data.texts.text}</p></div>
                            </div>
                        </div>
                        {this.buildNeed()}
                        <div className="w-slide">
                            <div className="behind-stretch fg"></div>
                            <div className="fg"></div>
                            <div className="content-parent welcome-stretching-tuts"><img className="neck-stretch"
                                                                                         src={this.props.data.images.neck}/>
                                <img
                                className="magni-body-part-to-burn" data-ix="magnifier-disappear" sizes="100vw"
                                src={this.props.data.images.burnMagni}
                            /><img
                                className="magni-body-part-to-move" data-ix="magnifier-appear" sizes="100vw"
                                src={this.props.data.images.moveMagni}
                            />
                            </div>
                            <div className="tut-texts-father tut-texts-father-in-stretching"><h1 className="stretching-title">
                                Stretching</h1>
                                <p className="explanations part-to-move-and-burn" data-ix="body-part-to-move-text-appear">
                                    The part to move according to the ↙️</p>
                                <p className="explanations part-to-move-and-burn" data-ix="body-part-burn-text-appear">The
                                    body part that's supposed to burn</p></div>
                        </div>

                        <div className="w-slide">
                            <div className="content-parent">
                                <div className="timer-button-boss">
                                    <div className="timer-explanation-father"><p
                                        className="explanations then-go this-timer-and-then-go"
                                        data-ix="then-start-text-appear">then Start</p>
                                        <p className="explanations this-timer-and-then-go"
                                           data-ix="timer-waits-text-appear">This timer waits 5 sec for you to get
                                            ready...</p>
                                        <div className="timer-button-supervisor timer-button-supervisor-tut">
                                            <a
                                                className="timer w-inline-block" href="#">
                                                <Clock disableNext={true} wait={44} duration={this.props.data.timer} cIndex={this.props.cIndex} sIndex={this.props.sIndex}/>
                                                <div className="get-ready" data-ix="get-ready-disappear">get ready...</div>
                                            </a>

                                            <div className="invisi-help-button-replacement"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pic-boss pic-boss-in-tutorial"><img className="shoulder-stretch"
                                                                                    src={this.props.data.images.shoulder}/>
                                </div>
                            </div>
                            <div className="tut-texts-father"></div>
                        </div>
                    </div>
                    <div className="left-arrow-2 w-slider-arrow-left">
                        <div className="w-icon-slider-left"></div>
                    </div>
                    <div className="w-round w-slider-nav" id="SliderInSliderNav"></div>
                </div>
            </div>
        );
    }

    buildNeed() {
        if (this.props.data.need)
        return (
            <div className="w-slide">
                <div className="content-parent welcome welcome-what-you-need"><h1
                    className="stretching-title what-you-need-title">What You Need</h1>
                    <div className="tut-welcome-what-you-need" data-ix="new-interaction">
                        {this.props.data.need.map(this.whatYouNeed)}
                    </div>
                </div>
            </div>
        );
    }

    whatYouNeed(need) {
        return (
            <div className="what-you-need-father">
                <img className="what-you-need-chair" role="presentation" sizes="(max-width: 991px) 212.625px, 21vw"
                     src={need.src}/>
                <div className="you-need-a">{need.text}</div>
            </div>)
    }
}

export default Welcome;