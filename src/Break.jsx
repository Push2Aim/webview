import React, {Component} from "react";
import Clock from "./Clock";
import Breath from "./Breath";

class Break extends Component {
    render() {
        return (
            <div className="w-slide">
                <div className="content-parent" style={{backgroundImage: this.props.data.background}}>
                    <div className="timer-button-boss">
                        <div className="timer-button-supervisor">
                            <a className="breathetime timer w-inline-block" href="#">
                                <Clock started={true} duration={this.props.data.timer} cIndex={this.props.cIndex} sIndex={this.props.sIndex}/>
                            </a>
                        </div>
                    </div>
                    <div className="breathetimeholder pic-boss">
                        <div className="breathetime-boss">
                            <Breath breathDuration={this.props.data.breathDuration}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Break;