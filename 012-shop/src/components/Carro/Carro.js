import { Component } from "react";
import BubbleAlert from "../BubbleAlert/BubbleAlert";
import DetallesCarrito from "../DetallesCarrito/DetallesCarrito";

const styles = {
  btnCarro: {
    backgroundColor: '#359A2C',
    color: '#fff',
    border: 'none',
    padding: '15px',
    borderRadius: '15px',
    cursor: 'pointer',
  },
  bubble: {
    position: 'relative',
    left: 12,
    top: 20
  }
}

class Carro extends Component {
  render() {
    const { carrito, esCarritoVisible, mostrarCarrito } = this.props
    const amount = carrito.reduce((acc, el) => acc + el.amount, 0)
    return (
      <div>
        <span style={styles.bubble}>
          {
            amount > 0 ?
              <BubbleAlert value={amount} />
              : null
          }
        </span>
        <button style={styles.btnCarro} onClick={mostrarCarrito}>
          Carro
        </button>
        {esCarritoVisible ? <DetallesCarrito carrito={carrito}/> : null}
      </div>
    )
  }
}

export default Carro