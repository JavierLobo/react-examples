import logo from './assets/img/logo.svg';
import './assets/css/App.css';

// Importacion de componentes
import MiCompDiv from './components/MiCompDiv/MiCompDiv';
import MiCompReactFragmet from './components/MiCompReactFragment/MiCompReactFragmet';
import MiReceta from './components/MiReceta/MiReceta';
import MisPeliculas from './components/MisPeliculas/MisPeliculas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <section name="componentes">
        <MiCompDiv />
        <MiCompReactFragmet />
        <MiReceta />
        <MisPeliculas />
      </section>
      </header>
    </div>
  );
}

export default App;
