import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// import MyElementEmpty from './components/MyElementEmpty/MyElementEmpty';
import MyList from './components/MyList/MyList';
import MyHeader from './components/MyHeader/MyHeader';
import MyFooter from './components/Myfooter/MyFooter';
import MyRecipe from './components/MyRecipe/MyRecipe';
import MyError from './components/MyError/MyError'
import MyHome from './components/MyHome/MyHome';
import MyBlog from './components/MyBlog/MyBlog';
import MyForm from './components/MyForm/MyForm';
import MyFilms from './components/MyFilms/MyFilms';

// function getExactPath(section) {
//   return this.state.elements
//   .find(element => element.section === section);
// };

class MyRouter extends Component {

  state = {};

  componentWillMount() {
    // antes de cargar el componente
    this.setState({
      elements: [
        {
          section: 'Inicio',
          link: '/home',
          component: '<MyHome />'
        },
        {
          section: 'Blog',
          link: '/blog',
          component: '<MyBlog />'
        },
        {
          section: 'Formulario',
          link: '/form',
          component: '<MyForm />'
        },
        {
          section: 'Peliculas',
          link: '/films',
          component: '<MyFilms />'
        },
        {
          section: 'Pagina 1',
          link: '/pagina-1',
          component: '<MyPage-1 />'
        },
        {
          section: 'Pagina 2',
          link: '/pruebas/:nombre/aurelio',
          component: '<MyPage-2 />'
        },
        {
          section: 'Pagina 3',
          link: '/pagina-3',
          component: '<MyPage-3 />'
        }
      ]
    });
  }

  render() {
    return (
      <Router>
        <MyHeader elementos={this.state.elements} />
        <div className='center'>
          <Routes>
            <Route exact path="/"     element={<MyList />} />
            <Route exact path="/home" element={<MyHome />} />
            <Route exact path="/blog" element={<MyBlog />} />
            <Route exact path="/form" element={<MyForm />} />
            <Route exact path="/films" element={<MyFilms />} />

            {/* <Router exact path="/ruta-prueba" Component={} /> */}

            <Route exact path="/pagina-1" render={() => (
              <React.Fragment>
                <h1>Hola Mundo desde la ruta: Pagina 1</h1>
                <MyRecipe saludo="Hola quillo!!" />
              </React.Fragment>
            )} />

            <Route exact path="/pruebas/:nombre/:apellidos?" render={(props) => {
              var nombre = props.match.params.nombre;
              var apellidos = props.match.params.apellidos;

              return (
                <div id="content">
                  <h1 className='subheader'>Página de pruebas</h1>
                  <h2>
                    {nombre && !apellidos &&
                      <React.Fragment>
                        {nombre}
                      </React.Fragment>
                    }
                    {nombre && apellidos &&
                      <React.Fragment>
                        {nombre} {apellidos}
                      </React.Fragment>
                    }
                  </h2>
                </div>
              );
            }} />
            <Route Component={MyError} />
          </Routes>

          <div className='clearfix'></div>
        </div>
        <MyFooter />
      </Router>
    );
  }
}

export default MyRouter;