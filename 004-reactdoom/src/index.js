import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const Li = ({ children, estado, casa, edad }) => {
//   console.log(casa, edad);
//   return (
//     <li>{children} estoy {estado}</li>
//   )
// }

// const GetRoot = () =>
//   <ul>
//     <li>fulano</li>
//     <Li
//       estado={'feliz'}
//       casa={false}
//       edad={24} >
//       Chanchito
//     </Li>
//     <Li estado={'triste'}>Chanchito</Li>
//     <Li estado={'emocionado'}>Felipe</Li>
//   </ul>

// ReactDOM.render(
//   <GetRoot />, document.getElementById('root')
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
