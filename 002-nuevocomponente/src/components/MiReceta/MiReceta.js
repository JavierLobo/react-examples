import React, {Component} from 'react';

class MiReceta extends Component {
    
    render() {
        let receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate', 'Queso', 'Jamon cocido'],
            calorias: 400
        }
        return (
            <React.Fragment>
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
            </React.Fragment>
        );
    }
}

export default MiReceta;