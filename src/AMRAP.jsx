import React, {Component} from "react";

class AMRAP extends Component {
    render() {
        return (
            <div className="w-slide">
                <div className="content-parent">
                    <div className="sidebar-amrap-workout" data-ix="display-none-on-load-amrap-workout">
                        <div className="close-button-boss">
                            <a className="close-button-amrap w-button"
                               data-ix="hide-button-amrap" href="#">X</a>
                            <div className="duplicates tut-spread">
                                <h1 className="heading">AMRAP</h1>
                                <p className="explanation">Those 3 exercises form 1 round.
                                    {/*<br>Do*/}
                                    {/*<strong>A</strong>s*/}
                                    {/*<strong>M</strong>any <strong>R</strong>ounds <strong>A</strong>s*/}
                                    {/*<strong>P</strong>ossible*/}
                                    {/*within 7 min.</br>*/}
                                </p>
                            </div>
                            <div className="video-tut-supervisor">
                                <div className="squats-tut-supervisor" data-ix="hide"></div>
                            </div>
                            <div className="tut-button-boss"><a className="tut-button w-button"
                                                                data-ix="dropdown-show"
                                                                href="#">How to do&nbsp;those 3 exercises</a>
                            </div>
                            <div className="back-button-boss"><a className="back-button w-button"
                                                                 data-ix="dropdown-hide"
                                                                 href="#">back</a></div>
                            <div className="dropdown-father">
                                <div className="exercise-tut-boss" data-ix="dropdown-display-none">
                                    {/*<div className="squats-tut w-embed w-video"*/}
                                    {/*data-ix="display-none-on-load-vid-tuts"*/}
                                    {/*style="padding-top: 56.17021276595745%;">*/}
                                    {/*<iframe className="embedly-embed"*/}
                                    {/*src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDy28eq2PjcM%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDy28eq2PjcM&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDy28eq2PjcM%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"*/}
                                    {/*scrolling="no" frameborder="0" allowfullscreen></iframe>*/}
                                    {/*</div>*/}
                                    {/*<div className="push-ups-tut w-embed w-video"*/}
                                    {/*data-ix="display-none-on-load-vid-tuts"*/}
                                    {/*style="padding-top: 56.17021276595745%;">*/}
                                    {/*<iframe className="embedly-embed"*/}
                                    {/*src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FIODxDxX7oi4%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DIODxDxX7oi4&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FIODxDxX7oi4%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"*/}
                                    {/*scrolling="no" frameborder="0" allowfullscreen></iframe>*/}
                                    {/*</div>*/}
                                    {/*<div className="sit-ups-tut w-embed w-video"*/}
                                    {/*data-ix="display-none-on-load-vid-tuts"*/}
                                    {/*style="padding-top: 56.17021276595745%;">*/}
                                    {/*<iframe className="embedly-embed"*/}
                                    {/*src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fy5BpvYGyVb0%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dy5BpvYGyVb0&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fy5BpvYGyVb0%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"*/}
                                    {/*scrolling="no" frameborder="0" allowfullscreen></iframe>*/}
                                    {/*</div>*/}

                                    <a className="tut-squats w-button" data-ix="vid-tut-squats-appear" href="#">Squats</a><a
                                    className="tut-push-ups w-button" data-ix="vid-tut-push-ups-appear"
                                    href="#">Push-Ups</a><a
                                    className="tut-sit-ups w-button" data-ix="vid-tut-sit-ups-appear"
                                    href="#">Sit-Ups</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="timer-button-boss">
                        <div className="amraphelp timer-button-supervisor"><a className="timer w-inline-block"
                                                                              href="#"></a><a
                            className="help-stretching w-button" data-ix="show-and-hide-amrap-workout" href="#">Help</a>
                        </div>
                    </div>
                    <div className="amrap-workout"><img className="amrap" sizes="50vw"
                                                        src="http://uploads.webflow.com/58c062e37f6bd43c050cce7f/58c28dd12a203f5d54fff426_7%20min%20AMRAP%20example.png"
                                                        srcset="http://uploads.webflow.com/58c062e37f6bd43c050cce7f/58c28dd12a203f5d54fff426_7%20min%20AMRAP%20example-p-500x500.png 500w, http://uploads.webflow.com/58c062e37f6bd43c050cce7f/58c28dd12a203f5d54fff426_7%20min%20AMRAP%20example-p-800x800.png 800w, http://uploads.webflow.com/58c062e37f6bd43c050cce7f/58c28dd12a203f5d54fff426_7%20min%20AMRAP%20example-p-1080x1080.png 1080w, http://uploads.webflow.com/58c062e37f6bd43c050cce7f/58c28dd12a203f5d54fff426_7%20min%20AMRAP%20example-p-1600x1600.png 1600w, http://uploads.webflow.com/58c062e37f6bd43c050cce7f/58c28dd12a203f5d54fff426_7%20min%20AMRAP%20example-p-2000x2000.png 2000w, http://uploads.webflow.com/58c062e37f6bd43c050cce7f/58c28dd12a203f5d54fff426_7%20min%20AMRAP%20example.png 2250w"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default AMRAP;