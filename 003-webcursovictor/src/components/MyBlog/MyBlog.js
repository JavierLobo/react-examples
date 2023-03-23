import React, { Component } from "react";
import MySlider from '../MySlider/MySlider';
import MySidebar from '../MySidebar/MySidebar';

class MyBlog extends Component {

  render() {
    return (
      <div id="blog">
        <MySlider
          title="Blog"
          size="slider-small"
        />

        <div className="center">
          <div id="content">
            <h1 className="subheader">Ultimos articulos</h1>
            {/* {// Listado de articulos} */}
          </div>
        </div>
        <MySidebar
          blog="true"
        />
      </div>
    );
  }
}

export default MyBlog;