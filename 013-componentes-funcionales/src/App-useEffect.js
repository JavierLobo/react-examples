import { Component, useState, useEffect } from "react"

// class App extends Component {
//   state = { contador: 0 }
//   incrementar = () => {
//     this.setState({ contador: this.state.contador +1 })
//   }

//   render() {
//     return(
//       <div>
//         contador: {this.state.contador}
//         <button onClick={this.incrementar}>Incrementar</button>
//       </div>
//     )
//   }
// }

// const App = () => {
//   const [contador, setContador] = useState(0)
//   return (
//     <div>
//       Contador: {contador}
//       <button onClick={() => setContador(contador + 1)}>Incrementar</button>
//     </div>
//   )
// }

// Cunstom Hook
// -------------------
const useContador = (inicial) => {
  const [contador, setContador] = useState(inicial)
  const incrementar = () => {
    setContador(contador + 1)
  }
  return [contador, incrementar]
}

// const Interval = ({ contador }) => {
//   useEffect(() => {
//     const i = setInterval(() => console.log(contador), 1000)
//     return () => clearInterval(i)
//   }, [contador])
//   return(
//     <p>Intervalo</p>
//   )
// }

class Interval extends Component {

  intervalo = ''

  componentDidMount() {
    this.intervalo = setInterval(() => console.log(this.props.contador), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalo)
  }

  render() {
    return (
      <p>Intervalo</p>
    )
  }
}

const App = () => {
  const [contador, incrementar] = useContador(0)
  useEffect(() => {
    document.title = contador
  }, [contador])
  return (
    <div>
      Contador: {contador}
      <button onClick={incrementar}>Incrementar</button>
      <Interval />
    </div>
  )
}

export default App