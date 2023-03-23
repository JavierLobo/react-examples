import Boton from './BotonComp/Boton'

const arr = [
  'chanchito feliz',
  'chanchito triste',
  'chanchito emocionado'
]

const App = () => {
  const miVariable = false;
  if (miVariable) {
    return <p>Mi variable dio true!</p>
  }
  return (
    <div>
      <h1>Hola mundo</h1>
      {arr.map(el => <p key={el}>{el}</p>)}
      <Boton onClick={() => console.log('Clickeado')}>
        Enviar
      </Boton>
    </div>
  )
}

export default App;