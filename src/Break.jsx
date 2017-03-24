import React, {Component} from "react";
import Breath from "./Breath";

class Break extends Component {
    render() {
        return (
            <div className="w-slide">
                <div className="content-parent">
                    <div className="timer-button-boss">
                        <div className="timer-button-supervisor">
                            <a className="breathetime timer w-inline-block" href="#"></a>
                        </div>
                    </div>
                    <div className="breathetimeholder pic-boss">
                        <div className="breathetime-boss"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Break;