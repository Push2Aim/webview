import React, {Component} from "react";

class WarmupStretching extends Component {
    render() {
        return (
            <div className="w-slide">
                <div className="content-parent">
                    <div className="for-stretching sidebar-stretching" data-ix="display-none-on-load-stretching">
                        <div className="close-button-boss">
                            <div className="duplicates stretching-text tut-spread"><h1 className="heading">Stretching</h1>
                                <p className="explanation">Take your time. Breathe all the time. Don't spoil yourself, but
                                    don't stretch to agony.</p></div>
                            <a className="close-button-stretching w-button" data-ix="hide-button" href="#">X</a></div>
                    </div>
                    <div className="timer-button-boss">
                        <div className="timer-button-supervisor"><a className="timer w-inline-block" href="#"></a><a
                            className="help-stretching w-button" data-ix="show-and-hide-stretching" href="#">Help</a>
                        </div>
                    </div>
                    <div className="pic-boss"><img className="shoulder-stretch" sizes="(max-width: 2156px) 55vw, 1186px"
                                                   src="http://uploads.webflow.com/58c062e37f6bd43c050cce7f/58c4617357a2703f67303098_ShouldersWeb.png"
                                                   srcset="http://uploads.webflow.com/58c062e37f6bd43c050cce7f/58c4617357a2703f67303098_ShouldersWeb-p-500x802.png 500w, http://uploads.webflow.com/58c062e37f6bd43c050cce7f/58c4617357a2703f67303098_ShouldersWeb-p-800x1283.png 800w, http://uploads.webflow.com/58c062e37f6bd43c050cce7f/58c4617357a2703f67303098_ShouldersWeb-p-1080x1732.png 1080w, http://uploads.webflow.com/58c062e37f6bd43c050cce7f/58c4617357a2703f67303098_ShouldersWeb.png 1186w"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Stretching;