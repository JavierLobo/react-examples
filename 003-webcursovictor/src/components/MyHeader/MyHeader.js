import React, { Component } from "react";

import MyLogo from "../MyLogo/MyLogo";
import MyMenu from "../MyMenu/MyMenu";

class MyHeader extends Component {
  render() {
    return (
      <header id="header">
        <div className="center">
          <MyLogo />
          <MyMenu itemsMenu={this.props.elementos} />
          <div className="clearfix"></div>
        </div>
      </header>
    );
  }
}

export default MyHeader;