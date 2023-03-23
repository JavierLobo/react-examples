import logo from './logo.svg';
import './App.css';

const estilo2 = {
  boxShadow: '0 5px 3px rgba(0,0,0,0.5)'
}

const estilo = ({bg = '#222'}) => ({
  background: bg,
  color: '#fff',
  padding: '10px 15px',
  margin: '10px 15px'
})

const Li = ({ children }) => {
  console.log(children);
  return (
    <li className='clase-li'>{children}</li>
  )
}

const App = () => {
  const valor = 'triste'
  return (
    <ul style={estilo({ bg: '#750'})} className='clase-css'>
      <Li estado='feliz'>Valor de Li</Li>
    </ul>
  )
}

export default App;
