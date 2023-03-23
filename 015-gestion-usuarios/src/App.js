import { useState } from 'react'

import Card from "./components/Card/Card"
import UserForm from "./components/UserForm/UserForm"
import Container from "./components/Container/Container"

function App() {
  const [usuarios, setUsuarios] = useState([])
  const submit = (usuario) => {
    setUsuarios([
      ...usuarios,
      usuario,
    ])
  }
  console.log(usuarios)
  return (
    <div style={{ marginTop: '15%' }}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <UserForm submit={submit} />
          </div>
        </Card>
        <Card>
          <ul>
            {usuarios.length > 0
              ? usuarios.map(user =>
                <li key={user.email}>
                  {`${user.name} ${user.lastname}: ${user.email}`}
                </li>)
              : <li>no hay</li>
            }
          </ul>
        </Card>
      </Container>
    </div>
  );
}

export default App;
