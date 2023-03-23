import React, { Component } from "react";
import MySidebar from "../MySidebar/MySidebar";
import MySlider from "../MySlider/MySlider";

class MyForm extends Component {

  render() {
    return (
      <div id="form">
        <MySlider
          title="Formulario"
          size="slider-small"
        />
        <div className="center">
          <div id="content">
            <h1 className="subheader">Mi formulario</h1>
            {

            }
          </div>
        </div>
        <MySidebar
          blog="false"
        />
      </div>
    );
  }
}
export default MyForm;