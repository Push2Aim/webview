import React, {Component} from "react";

class Warmup extends Component {
    render() {
        return (
            <div className="w-slide">
                <div className="content-parent">
                    <div className="sidebar-warmup" data-ix="display-none-on-load-warmup">
                        <div className="close-button-boss">
                            <div className="duplicates tut-spread warmup-text">
                                <h1 className="heading">{this.props.data.texts.heading}</h1>
                                <p className="explanation">{this.props.data.texts.explanation}</p></div>
                            <a className="close-button-warmup w-button" data-ix="hide-button-warmup" href="#">X</a></div>
                    </div>
                    <div className="timer-button-boss">
                        <div className="timer-button-supervisor"><a className="timer w-inline-block" href="#"></a><a
                            className="help-warmup w-button" data-ix="show-and-hide-warmup" href="#">Help</a></div>
                    </div>
                    <div className="pic-boss">
                        <img className="shoulder-stretch" sizes="(max-width: 2156px) 55vw, 1186px"
                             src={this.props.data.images.pic}
                    />
                    </div>
                </div>
            </div>
        );
    }
}

export default Warmup;