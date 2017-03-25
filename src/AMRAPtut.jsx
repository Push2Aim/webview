import React, {Component} from "react";

class AMRAPtut extends Component {
    render() {
        return (
            <div className="w-slide">
                <div className="content-parent">
                    <div className="sidebar-amrap-explanation" data-ix="display-none-on-load-amrap-explanation">
                        <div className="close-button-boss">
                            <a className="close-button-amrap w-button"
                            data-ix="hide-button-amrap" href="#">X</a>
                            <div className="duplicates tut-spread">
                                <h1 className="heading">{this.props.data.texts.heading}</h1>
                                <p className="explanation">{this.props.data.texts.explanation}</p>
                            </div>
                            <div className="video-tut-supervisor">
                                <div className="squats-tut-supervisor" data-ix="hide"></div>
                            </div>
                            <div className="tut-button-boss"><a className="tut-button w-button"
                                                                data-ix="dropdown-show"
                                                                href="#">{this.props.data.texts.tutButton}</a>
                            </div>
                            <div className="back-button-boss"><a className="back-button w-button"
                                                                 data-ix="dropdown-hide"
                                                                 href="#">back</a></div>
                            <div className="dropdown-father">
                                <div className="exercise-tut-boss" data-ix="dropdown-display-none">
                                    <div className="squats-tut w-embed w-video"
                                    data-ix="display-none-on-load-vid-tuts"
                                    >
                                        {/*style="padding-top: 56.17021276595745%;"*/}
                                        <iframe className="embedly-embed"
                                        src={this.props.data.videos[0].src}
                                        scrolling="no" frameborder="0" allowfullscreen></iframe>
                                    </div>
                                    <div className="push-ups-tut w-embed w-video"
                                    data-ix="display-none-on-load-vid-tuts"
                                    >
                                    {/*style="padding-top: 56.17021276595745%;"*/}
                                        <iframe className="embedly-embed"
                                                src={this.props.data.videos[1].src}
                                                scrolling="no" frameborder="0" allowfullscreen></iframe>
                                    </div>
                                    <div className="sit-ups-tut w-embed w-video"
                                    data-ix="display-none-on-load-vid-tuts"
                                    >
                                    {/*style="padding-top: 56.17021276595745%;"*/}
                                        <iframe className="embedly-embed"
                                                src={this.props.data.videos[2].src}
                                                scrolling="no" frameborder="0" allowfullscreen></iframe>
                                    </div>
                                    <a className="tut-squats w-button" data-ix="vid-tut-squats-appear" href="#">
                                        {this.props.data.videos[0].title}</a><a
                                    className="tut-push-ups w-button" data-ix="vid-tut-push-ups-appear"
                                    href="#">{this.props.data.videos[1].title}</a>
                                    <a
                                        className="tut-sit-ups w-button" data-ix="vid-tut-sit-ups-appear"
                                        href="#">{this.props.data.videos[2].title}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="explanations-boss">
                        <div className="timer-and-buttons-supervisor">
                            <div className="amrap-help">
                                <div className="amrap-how-to">{this.props.data.texts.howTo}</div>
                            </div>
                            <div className="buttons-uncle">
                                <div className="help-supervisor"><a className="help-amrap-explanation w-button"
                                                                    data-ix="show-and-hide-amrap-explanation"
                                                                    href="#">Help</a></div>
                                <div onClick={this.nextSlide.bind(this)}
                                     className="start-supervisor"><a className="start-button w-button">Start</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="amrap-workout">
                        <img className="amrap" role="presentation" sizes="50vw"
                             src={this.props.data.images.workout}/>
                    </div>
                </div>
            </div>
        );
    }

    nextSlide() {
        window.$("#nextSlide").trigger("tap");
    }
}

export default AMRAPtut;