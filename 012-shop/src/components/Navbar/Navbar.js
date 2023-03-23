import { Component } from "react";

import Logo from '../Logo/Logo'
import Carro from '../Carro/Carro'

const styles = {
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100px',
    justifyContent: 'space-between',
    position: 'relative',
    padding: '0 50px',
    boxShadow: '0 2px 3px rgb(0, 0, 0, 0.1)'
  }
}

class Navbar extends Component {
  render() {
    const { carrito, esCarritoVisible, mostrarCarrito } = this.props
    return (
      <nav style={styles.navbar}>
        <Logo />
        <Carro
          carrito={carrito}
          esCarritoVisible={esCarritoVisible}
          mostrarCarrito={mostrarCarrito}
        />
      </nav>
    )
  }
}

export default Navbar