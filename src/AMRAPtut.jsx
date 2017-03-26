import React, {Component} from "react";

class AMRAPtut extends Component {

    buildTuts(videos) {
        return videos.map((video, i) => {
                let videoClass = "w-embed w-video vid-tut-" + i;
                return (
                    <div className={videoClass}
                         data-ix="display-none-on-load-vid-tuts">
                        {/*style="padding-top: 56.17021276595745%;"*/}
                        <iframe className="embedly-embed"
                                src={video.src}
                                scrolling="no" frameborder="0" allowfullscreen></iframe>
                    </div>
                );
            }
        );
    }


    buildButtons(videos) {
        return videos.map((video, i) => {
                let videoClass = "tut-" + i + "-button w-button";
                let videoAnimation = "vid-tut-" + i + "-appear";
                return (
                    <a className={videoClass}
                       data-ix={videoAnimation} href="#">{video.title}</a>
                );
            }
        );
    }

    render() {
        return (
            <div className="w-slide">
                <div className="content-parent" style={{backgroundImage: this.props.data.background}}>
                    <div className="sidebar-amrap-explanation" data-ix="display-none-on-load-amrap-explanation">
                        <div className="close-button-boss">
                            <a className="close-button-amrap-tut w-button"
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
                                    {this.buildTuts(this.props.data.videos)}
                                    {this.buildButtons(this.props.data.videos)}
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