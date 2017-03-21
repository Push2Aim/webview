import React, {Component} from "react";

class Trophy extends Component {
    render() {
        return (
            <div className="w-slide">
                <div className="content-parent">
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
}

export default Trophy;