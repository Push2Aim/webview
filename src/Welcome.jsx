import React, {Component} from "react";
import Clock from "./Clock";

class Welcome extends Component {
    render() {
        return (

            <div className="w-slide">
                <div className="tut-slider w-slider" data-animation="cross" data-autoplay="1" data-delay="14000"
                     data-duration="500" data-easing="ease-in" data-infinite="1">
                    <div className="w-slider-mask">
                        <div className="w-slide">
                            <div className="content-parent welcome">
                                <div className="tut-welcome-supervisor" data-ix="slowly-move-and-scale"><h1
                                    className="_1-step-closer welcome-to">{this.props.data.texts.title}</h1>
                                    <p className="welcome-what-you-do">{this.props.data.texts.text}</p></div>
                            </div>
                        </div>
                        <div className="w-slide">
                            <div className="content-parent welcome welcome-what-you-need"><h1
                                className="stretching-title what-you-need-title">What You Need</h1>
                                <div className="tut-welcome-what-you-need" data-ix="new-interaction">
                                    {this.buildNeed()}
                                </div>
                            </div>
                        </div>
                        <div className="w-slide">
                            <div className="behind-stretch fg"></div>
                            <div className="fg"></div>
                            <div className="content-parent welcome-stretching-tuts"><img className="neck-stretch" sizes="100vw"
                                                                                         src="http://uploads.webflow.com/58c062e37f6bd43c050cce7f/58c4692f8712539d1de75694_NeckWeb.png"
                                                                                         srcset="http://uploads.webflow.com/58c062e37f6bd43c050cce7f/58c4692f8712539d1de75694_NeckWeb-p-500x850.png 500w, http://uploads.webflow.com/58c062e37f6bd43c050cce7f/58c4692f8712539d1de75694_NeckWeb-p-800x1360.png 800w, http://uploads.webflow.com/58c062e37f6bd43c050cce7f/58c4692f8712539d1de75694_NeckWeb-p-1080x1836.png 1080w, http://uploads.webflow.com/58c062e37f6bd43c050cce7f/58c4692f8712539d1de75694_NeckWeb.png 1084w"/><img
                                className="magni-body-part-to-burn" data-ix="magnifier-disappear" sizes="100vw"
                                src="http://uploads.webflow.com/58c062e37f6bd43c050cce7f/58c58898fdbad0f237849f41_BurnMagnifier.png"
                                srcset="http://uploads.webflow.com/58c062e37f6bd43c050cce7f/58c58898fdbad0f237849f41_BurnMagnifier-p-500x850.png 500w, http://uploads.webflow.com/58c062e37f6bd43c050cce7f/58c58898fdbad0f237849f41_BurnMagnifier-p-800x1360.png 800w, http://uploads.webflow.com/58c062e37f6bd43c050cce7f/58c58898fdbad0f237849f41_BurnMagnifier-p-1080x1836.png 1080w, http://uploads.webflow.com/58c062e37f6bd43c050cce7f/58c58898fdbad0f237849f41_BurnMagnifier.png 1084w"/><img
                                className="magni-body-part-to-move" data-ix="magnifier-appear" sizes="100vw"
                                src="http://uploads.webflow.com/58c062e37f6bd43c050cce7f/58c81dbe95d009d84db1d669_MoveMagnifier.png"
                                srcset="http://uploads.webflow.com/58c062e37f6bd43c050cce7f/58c81dbe95d009d84db1d669_MoveMagnifier-p-500x850.png 500w, http://uploads.webflow.com/58c062e37f6bd43c050cce7f/58c81dbe95d009d84db1d669_MoveMagnifier-p-800x1360.png 800w, http://uploads.webflow.com/58c062e37f6bd43c050cce7f/58c81dbe95d009d84db1d669_MoveMagnifier-p-1080x1836.png 1080w, http://uploads.webflow.com/58c062e37f6bd43c050cce7f/58c81dbe95d009d84db1d669_MoveMagnifier.png 1084w"/>
                            </div>
                            <div className="tut-texts-father tut-texts-father-in-stretching"><h1
                                className="stretching-title">
                                Stretching</h1>
                                <div className="tutorial-area-text-boss-2 tutorial-move"
                                     data-ix="body-part-to-move-text-appear"><p className="part-to-burn">The part to
                                    move
                                    according to the ↙️</p></div>
                                <div className="tutorial-area-text-boss tutorial-burn"
                                     data-ix="body-part-burn-text-appear">
                                    <p className="part-to-burn">The body part that's supposed to burn</p></div>
                            </div>
                        </div>
                        <div className="w-slide">
                            <div className="behind-stretch fg"></div>
                            <div className="fg"></div>
                            <div className="content-parent">
                                <div className="timer-button-boss">
                                    <div className="timer-explanation-father">
                                        <div className="timer-button-supervisor tut-text">
                                            <div className="tutorial-area-text-boss-2 tutorial-then-start"
                                                 data-ix="then-start-text-appear"><p
                                                className="part-to-burn then-start">
                                                then Start</p></div>
                                            <div className="tutorial-area-text-boss tutorial-this-timer-waits"
                                                 data-ix="timer-waits-text-appear"><p
                                                className="part-to-burn this-timer-tutorial">This timer waits 5 sec for
                                                you to get ready...</p></div>
                                        </div>
                                        <div className="timer-button-supervisor timer-button-supervisor-tut">
                                            <a
                                            className="timer w-inline-block" href="#">
                                                <Clock enableNext={false} wait={44} duration={this.props.data.timer} cIndex={this.props.cIndex} sIndex={this.props.sIndex}/>
                                            </a>
                                            <div className="invisi-help-button-replacement"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pic-boss pic-boss-in-tutorial"><img className="shoulder-stretch"
                                                                                    sizes="(max-width: 2156px) 55vw, 1186px"
                                                                                    src="http://uploads.webflow.com/58c062e37f6bd43c050cce7f/58c4617357a2703f67303098_ShouldersWeb.png"
                                                                                    srcset="http://uploads.webflow.com/58c062e37f6bd43c050cce7f/58c4617357a2703f67303098_ShouldersWeb-p-500x802.png 500w, http://uploads.webflow.com/58c062e37f6bd43c050cce7f/58c4617357a2703f67303098_ShouldersWeb-p-800x1283.png 800w, http://uploads.webflow.com/58c062e37f6bd43c050cce7f/58c4617357a2703f67303098_ShouldersWeb-p-1080x1732.png 1080w, http://uploads.webflow.com/58c062e37f6bd43c050cce7f/58c4617357a2703f67303098_ShouldersWeb.png 1186w"/>
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

    whatYouNeed(need) {
        return (
            <div className="what-you-need-father">
                <img className="what-you-need-chair"
                     sizes="(max-width: 991px) 212.625px, 21vw"
                     src={need.src}
                />
                <div className="you-need-a">{need.text}</div>
            </div>)
    }

    buildNeed() {
        return this.props.data.need.map(this.whatYouNeed);
    }
}

export default Welcome;