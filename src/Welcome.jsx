import React, {Component} from "react";

class Welcome extends Component {
    render() {
        return (
            <div className="w-slide"><a className="start-workout-button w-button" href="#">Start</a>
                <div className="tut-slider w-slider" data-animation="cross" data-autoplay="1" data-delay="14000"
                     data-duration="500" data-infinite="1">
                    <div className="w-slider-mask">
                        <div className="w-slide">
                            <div className="content-parent welcome">
                                <div className="tut-welcome-supervisor" data-ix="slowly-move">
                                    <h1 className="_1-step-closer welcome-to">{this.props.data.texts.title}</h1>
                                    <p className="welcome-what-you-do">{this.props.data.texts.text}</p></div>
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
                            <div className="tut-texts-father"><h1 className="stretching-title">Stretching</h1>
                                <div className="move-arrow-text-boss" data-ix="body-part-burn-text-appear-2"><p
                                    className="part-to-burn">The part to move according to the ↙️</p></div>
                                <div className="burn-area-text-boss" data-ix="body-part-burn-text-appear"><p
                                    className="part-to-burn">The body part that's supposed to burn</p></div>
                            </div>
                        </div>
                        <div className="w-slide welcome-slide-3">
                            <div className="content-parent">
                                <div className="timer-button-boss">
                                    <div className="timer-explanation-father">
                                        <div className="timer-button-supervisor">
                                            <div className="timer-explanation" data-ix="timer-explanation"><p
                                                className="timer-explanation-text">This timer waits 5 sec for you to get
                                                ready...</p>
                                                <h1 className="timer-explanation-start">Then Start</h1></div>
                                        </div>
                                    </div>
                                    <div className="timer-button-supervisor"><a className="timer tutorial-timer w-inline-block"
                                                                                href="#"></a>
                                        <div className="invisi-help-button-replacement"></div>
                                    </div>
                                </div>
                                <div className="pic-boss"><img className="shoulder-stretch"
                                                               sizes="(max-width: 2156px) 55vw, 1186px"
                                                               src="http://uploads.webflow.com/58c062e37f6bd43c050cce7f/58c4617357a2703f67303098_ShouldersWeb.png"
                                                               srcset="http://uploads.webflow.com/58c062e37f6bd43c050cce7f/58c4617357a2703f67303098_ShouldersWeb-p-500x802.png 500w, http://uploads.webflow.com/58c062e37f6bd43c050cce7f/58c4617357a2703f67303098_ShouldersWeb-p-800x1283.png 800w, http://uploads.webflow.com/58c062e37f6bd43c050cce7f/58c4617357a2703f67303098_ShouldersWeb-p-1080x1732.png 1080w, http://uploads.webflow.com/58c062e37f6bd43c050cce7f/58c4617357a2703f67303098_ShouldersWeb.png 1186w"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-round w-slider-nav"></div>
                </div>
            </div>

        );
    }
}

export default Welcome;