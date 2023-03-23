import { Component } from "react";
import MyFilm from "../Myfilm/MyFilm";
import MySlider from "../MySlider/MySlider";

class MyFilms extends Component {
  state = {};

  componentWillMount() {
    // antes de cargar el componente
    this.setState({
      films: [
        {
          title: 'Un fulano en marte',
          gener: 'comedia',
          description: 'Narra la historia de un fulano en marte',
          imageUrl: '',
          imageLocal: '',
          favorite: 'true'
        },
        {
          title: 'Un mengano en jupiter',
          gener: 'comedia',
          description: 'Parodia que Narra la historia de un mengano en jupiter',
          imageUrl: '',
          imageLocal: '',
          favorite: 'false'
        }
      ]
    });
  }

  componentDidMount() {
    // Una vez pintado el componente
    // console.log('MyFilms');
    // console.log(this.state);
  }

  componentWillUnmount() {
    // al destruir el componente (ni idea para que puede servir)
  }

  render() {
    var pStyle = {
      background: 'green',
      color: 'white',
      padding: '10px'
    }

    const myFavorites = () => this.state.films
      .find((film) => film.favorite === "true");
    console.log("myFavorites")
    console.log(myFavorites)

    // const noFavorites = () => this.state.films.find((film) => film.favorite === 'false');
    // console.log("noFavorites")
    // console.log(myFavorites)

    return (
      <div className="center">
        <div id="content" className="peliculas">
          <MySlider
            title="Peliculas"
            size="slider-small"
          />
          <div id="content" className="films">
            <h2 className="subheader">Peliculas</h2>
            <p>
              <button onClick={this.cambiarTitulo}>
                Cambiar titulo a batman
              </button>
            </p>
            {
              this.state.films.map((favorite, id) => {
                return (
                  <MyFilm
                    id={id}
                    myFilm={favorite} />
                )
              })
            }
            {
              // this.state.films.title ? (
              //   <p className="favorita" style={pStyle}>
              //     <strong>La pelicula favorita es: </strong>
              //     <span>{this.state.favorita.title}</span>
              //   </p>
              // ) : (
              //   <p>No hay pelicula favorita!!</p>
              // )
            }
          </div>

          <div id="articles" className="peliculas">
            {
              // noFavoriteIs.map((film, id) => {
              //   return (
              //     <MyElement
              //       key={id}
              //       pelicula={film}
              //     />
              //   )
              // })
            }
          </div>
        </div>
      </div>
    );
  }
}
export default MyFilms;