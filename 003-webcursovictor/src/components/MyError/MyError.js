import React, { Component } from "react";


class MyError extends Component {

    render() {
        return (
            <section id="content">
                <h2 className="subheader">Página no encontrada</h2>
                <p>La página a la que intentas acceder no existe en la web</p>
            </section>
        );
    }
}

export default MyError;