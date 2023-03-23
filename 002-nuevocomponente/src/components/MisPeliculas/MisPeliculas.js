import React, {Component} from 'react';
import MensajeEstatico from './MensajeEstatico';

class MisPeliculas extends Component {
    
    render() {
        return (
            <React.Fragment>
                <h1>Hola, soy el componente llamado:</h1>
                <h2>MisPeliculas</h2>
                <MensajeEstatico />
            </React.Fragment>
        );
    }
}

export default MisPeliculas;