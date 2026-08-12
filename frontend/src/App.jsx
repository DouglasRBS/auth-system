import { useState } from 'react'
import Welcome from './components/Welcome'

function App() {

  const [name, setName] = useState('Douglas')

  return (
    <div>
      <h1>Meu sistema de autenticação</h1>

      <Welcome name={name} />

      <button onClick={() => setName('João')}>
        Mudar nome
      </button>
    </div>
  )
}

export default App