import React, {Component} from "react";

class Trophy extends Component {
    render() {
        return (
            <div className="w-slide">
                <div className="content-parent"><img className="trophy" data-ix="trophy-appear"
                                                     sizes="(max-width: 991px) 100vw, 857.421875px"
                                                     src="http://uploads.webflow.com/58c062e37f6bd43c050cce7f/58c352892387178e61460262_Trophy.png"
                                                     srcset="http://uploads.webflow.com/58c062e37f6bd43c050cce7f/58c352892387178e61460262_Trophy-p-500x584.png 500w, http://uploads.webflow.com/58c062e37f6bd43c050cce7f/58c352892387178e61460262_Trophy-p-800x934.png 800w, http://uploads.webflow.com/58c062e37f6bd43c050cce7f/58c352892387178e61460262_Trophy.png 866w"/>
                    <div className="congrats-father">
                        <div className="congrats-boss"><h1 className="_1-step-closer">1 Step Closer To Your
                            Goal!</h1>
                            <p className="congrats-text">I'm happy for you and hope you keep going.</p></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Trophy;