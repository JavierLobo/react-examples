import React, { Component } from "react";
import logo from './assets/img/react.svg';

class MyLogo extends Component {

    render() {
        return (
            <div id="logo">
                <img src={logo} className="app-logo" alt="Logotipo" />
                <span id="brand">
                    <strong>Curso</strong>React
                </span>
            </div>
        );
    }
}

export default MyLogo;