import React, { Component } from "react";

import './css/MyFooter.css';

class MyFooter extends Component {

    render() {
        return (
            <footer id="footer">
                <div className="center">
                    <p>
                        &copy; Máster en frameworks para JavaScript de victorroblesweb.es
                    </p>
                </div>
            </footer>
        );
    }
}

export default MyFooter;