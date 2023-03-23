import React, { Component } from "react";

class MySlider extends Component {

    render() {
        return (
            <div id="slider" className={this.props.size}>
                <h1>{this.props.title}</h1>
                {this.props.btnName &&
                    <a href={this.props.btnName} className="btn-white">{this.props.btnName}</a>
                }
            </div>
        );
    }
}

export default MySlider;