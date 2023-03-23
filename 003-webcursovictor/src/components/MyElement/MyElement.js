import React, { Component } from "react";

class MyElement extends Component {

    render() {
        return (
            <article className="article-item" id="article-template" >
                <div className="image-wrap" >
                    <img src={this.props.image} alt="Paisaje" />
                </div>
                <h2>{this.props.title}</h2>
                <span className="date">
                    {this.props.date}
                </span>
                <p>{this.props.text}</p>
                <a href="#">Leer más</a>
                <div className="clearfix">
                    xxxxxx
                </div>
            </article>
        );
    }
}

export default MyElement;