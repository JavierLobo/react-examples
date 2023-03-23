import React, { Component } from "react";
import MySlider from '../MySlider/MySlider';
import MySidebar from '../MySidebar/MySidebar';

class MyHome extends Component {

  render() {
    return (
      <div id="home">
        <MySlider
          title="Home"
          size="slider-big"
          btnName="Ir al blog"
          url="#" 
        />

        <div className="center">

          <div id="content">
            <h1 className="subheader">Pagina del home</h1>
          </div>
        </div>
        <MySidebar 
            blog="true"
        />
      </div>
    );
  }
}
export default MyHome;