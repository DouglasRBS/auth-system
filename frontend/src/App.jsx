import { useState } from 'react'
import Welcome from './components/Welcome'
import Login from './components/Login'

function App() {

  const [name, setName] = useState('Douglas')

  return (
    <div>

      <h1>Meu sistema de autenticação</h1>

      <Welcome name={name} />

      <button onClick={() => setName('João')}>
        Mudar nome
      </button>

      <Login />

    </div>
  )
}

export default App