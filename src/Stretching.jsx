import React, {Component} from "react";
import Clock from "./Clock";

class Stretching extends Component {
    render() {
        return (
            <div className="w-slide">
                <div className="content-parent" style={{backgroundImage: this.props.data.background}}>
                    <div className="for-stretching sidebar-stretching" data-ix="display-none-on-load-stretching">
                        <div className="close-button-boss">
                            <div className="duplicates stretching-text tut-spread"><h1 className="heading">{this.props.data.texts.heading}</h1>
                                <p className="explanation">{this.props.data.texts.explanation}</p></div>
                            <a className="close-button-stretching w-button" data-ix="hide-button" href="#">X</a></div>
                    </div>
                    <div className="timer-button-boss">
                        <div className="timer-button-supervisor">
                            <a className="timer w-inline-block" href="#">
                                <Clock duration={this.props.data.timer} cIndex={this.props.cIndex} sIndex={this.props.sIndex}/>
                            </a>
                            <a className="help-stretching w-button" data-ix="show-and-hide-stretching" href="#">Help</a>
                        </div>
                    </div>
                    <div className="pic-boss">
                        <img className="shoulder-stretch" role="presentation" sizes="(max-width: 2156px) 55vw, 1186px"
                             src={this.props.data.images.pic}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Stretching;