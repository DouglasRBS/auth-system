import { useState } from 'react'
import '../styles/Login.css'
import api from '../services/api'

function Login({ onLogin, onRegister }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()

    setError('')
    setLoading(true)

    try {

      const response = await api.post('/auth/login', {
        email,
        password
      })

      localStorage.setItem('token', response.data)

      console.log('Login realizado com sucesso!')

      onLogin()

    } catch (error) {

      console.error('Erro no login:', error)

      if (error.response?.status === 401) {
        setError('E-mail ou senha incorretos.')
      } else {
        setError('Não foi possível realizar o login.')
      }

    } finally {

      setLoading(false)

    }
  }

  return (
    <div className="login-container">

      <div className="login-card">

        <div className="login-header">
          <h2>Bem-vindo</h2>
          <p>Entre na sua conta para continuar</p>
        </div>

        {error && (
          <p className="error-message">
            {error}
          </p>
        )}

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

          <button
            type="submit"
            className="login-button"
            disabled={loading}
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>

        </form>

        <p className="login-footer">
          Ainda não possui uma conta?{' '}
          <button
            type="button"
            className="register-link"
            onClick={onRegister}
          >
            Cadastre-se
          </button>
        </p>

      </div>

    </div>
  )
}

export default Login