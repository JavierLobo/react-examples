import { Component } from "react";


class MyFilm extends Component {
    render() {
        var pStyle = {
        }

        const { id, myFilm } = this.props

        console.log("En MyFilm")
        console.log(this.props)

        var myFavoriteIs;
        if (myFilm) {
            myFavoriteIs = (
                <p id={id} className="favorita" style={pStyle}>
                    <strong>La pelicula favorita es: </strong>
                    <span>{myFilm.title}</span>
                </p>
            );

        } else {
            myFavoriteIs = (
                <p>No hay pelicula favorita!!</p>
            )
        }

        return (
            { myFavoriteIs }

            //     myFilm.title ? (
            //     <p className="favorita" style={pStyle}>
            //       <strong>La pelicula favorita es: </strong>
            //       <span>{this.state.favorita.title}</span>
            //     </p>
            //   ) : (
            //     <p>No hay pelicula favorita!!</p>
            //   )

        )
    }

}


export default MyFilm;