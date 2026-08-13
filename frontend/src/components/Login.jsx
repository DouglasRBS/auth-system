import { useState } from 'react'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    console.log('Email:', email)
    console.log('Senha:', password)
  }

  return (
    <form onSubmit={handleSubmit}>

      <h2>Login</h2>

      <input
        type="email"
        placeholder="Digite seu email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <input
        type="password"
        placeholder="Digite sua senha"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <button type="submit">
        Entrar
      </button>

    </form>
  )
}

export default Login