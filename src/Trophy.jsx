import React, {Component} from "react";

class Trophy extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            hasSendXP: false,
        }
    }

    render() {
        return (
            <div className="w-slide">
                <div className="content-parent" style={{backgroundImage: this.props.data.background}}>
                    <img className="trophy" role="presentation" data-ix="trophy-appear"
                         sizes="(max-width: 991px) 100vw, 857.421875px"
                         src={this.props.data.images.trophy_pic}/>
                    <div className="congrats-father">
                        <div className="congrats-boss">
                            <h1 className="_1-step-closer">{this.props.data.texts.title}</h1>
                            <p className="congrats-text">{this.props.data.texts.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        if (!this.state.hasSendXP && this.isOnCurrentSlide()) {
            window.$.post(this.props.url + "/xp", {token: this.props.token, type: "drill"});
            this.setState({hasSendXP: true})
        }
    }

    isOnCurrentSlide() {
        return this.props.sIndex === this.getSliderIndex();
    }
}

export default Trophy;