import { Component } from "react";

class Input extends Component {

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', prevProps, prevState)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount', this.prevProps, this.prevState)
  }

  render() {
    return (
      <input 
          value={this.props.value} onChange={this.props.onChange}
      />
    )
  }
}

class App extends Component {
  state = {
    nombre: '',
    apellido: ''
  }

  updateValues = (props, value) => {
    this.setState({ [props]: value})
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <p>Nombre completo: {`${this.state.nombre} ${this.state.apellido}`}</p>
        <Input 
            value={this.state.nombre} 
            onChange={e => this.updateValues('nombre', e.target.value)} 
          />
        <Input 
            value={this.state.apellido} 
            onChange={e => this.updateValues('apellido', e.target.value)} 
          />
      </div>
    )
  }
}

export default App;
