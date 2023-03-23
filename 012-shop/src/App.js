import { Component } from 'react';
import Productos from './components/Productos/Productos';
import Layout from './components/Layout/Layout';
import Title from './components/Title/Title';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  state = {
    productos: [
      {
        name: 'Tomate',
        price: 1500,
        imgUrl: 'https://www.elhuertodelabuelo.es/37-thickbox_default/tomate-cana-andaluz.jpg',
        imgLocal: './assets/img/tomate001.jpg'
      },
      {
        name: 'Arbejas',
        price: 1500,
        imgUrl: 'https://lagranjamarket.com.co/wp-content/uploads/2021/07/ARVEJACASCARA.jpg',
        imgLocal: './assets/img/Arbejas001.jpg'
      },
      {
        name: 'Lechuga',
        price: 1500,
        imgUrl: 'data:image/jpeg;base64,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',
        imgLocal: './assets/img/lechuga001.jpg'
      },
    ],
    carrito: [
      // { name: 'Tomate', amount: 0 }
    ],
    esCarritoVisible: false
  }

  agregarAlCarro = (producto) => {
    const { carrito } = this.state
    if (carrito.find(x => x.name === producto.name)) {
      const newCarrito = carrito.map(x => x.name === producto.name
        ? ({ ...x, amount: x.amount + 1 }) : x
      )
      console.log(newCarrito)
      return this.setState({ carrito: newCarrito })
    }
    return this.setState({
      carrito: this.state.carrito.concat({
        name: `${producto.name}`,
        imgUrl: `${producto.imgUrl}`,
        imgLocal: `${producto.imgLocal}`,
        amount: 1
      })
    })
  }

  mostrarCarrito = () => {
    if (!this.state.carrito.length) { return }
    this.setState({ esCarritoVisible: !this.state.esCarritoVisible })
  }

  render() {
    const { esCarritoVisible } = this.state
    return (
      <div>
        <Navbar
          carrito={this.state.carrito}
          esCarritoVisible={esCarritoVisible}
          mostrarCarrito={this.mostrarCarrito}
        />
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
