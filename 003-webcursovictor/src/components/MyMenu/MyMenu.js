import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import './css/MyMenu.css';

class MyMenu extends Component {

  render() {
    return (
      <nav id="menu">
        <ul>
          {
            this.props.itemsMenu.map((element, i) => {
              return (
                <li key={i}>
                  <NavLink to={element.link} activeClassName="active">{element.section}</NavLink>
                </li>
              )
            })
          }
        </ul>
      </nav>
    );
  }
}

export default MyMenu;