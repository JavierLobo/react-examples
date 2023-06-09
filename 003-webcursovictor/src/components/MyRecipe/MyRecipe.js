import React, { Component } from 'react';

class MyRecipe extends Component {

  render() {
    let receta = {
      nombre: 'Pizza',
      ingredientes: ['Tomate', 'Queso', 'Jamon cocido'],
      calorias: 400
    }
    return (
      <section id='content'>
        <h1>Receta: {receta.nombre}</h1>
        <h2>Calorias: {receta.calorias}</h2>

        <ol>
          {
            receta.ingredientes.map((ingrediente, i) => {
              console.log(ingrediente);
              return (
                <li key={i}>{ingrediente}</li>
              );
            })
          }
        </ol>
        <hr />
        {this.props.saludo &&
          <React.Fragment>
            <h1>DESDE UNA PROP:</h1>
            <h3>{this.props.saludo}</h3>
          </React.Fragment>
        }
      </section>
    );
  }
}

export default MyRecipe;