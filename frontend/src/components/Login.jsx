import { useState } from 'react'
import '../styles/Login.css'
import api from '../services/api'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()

    try {

      const response = await api.post('/auth/login', {
        email,
        password
      })

      localStorage.setItem('token', response.data)

      console.log('Login realizado com sucesso!')

    } catch (error) {

      console.error('Erro no login:', error)

    }
  }

  return (
    <div className="login-container">

      <div className="login-card">

        <div className="login-header">
          <h2>Bem-vindo</h2>
          <p>Entre na sua conta para continuar</p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Senha</label>

            <input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-button">
            Entrar
          </button>

        </form>

        <p className="login-footer">
          Ainda não possui uma conta? <span>Cadastre-se</span>
        </p>

      </div>

    </div>
  )
}

export default Login