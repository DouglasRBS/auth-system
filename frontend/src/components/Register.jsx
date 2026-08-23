import { useState } from 'react'
import '../styles/Register.css'
import api from '../services/api'

function Register({ onRegister }) {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()

    setError('')
    setLoading(true)

    try {

      await api.post('/auth/register', {
        name,
        email,
        password
      })

      console.log('Cadastro realizado com sucesso!')

      onRegister()

    } catch (error) {

      console.error('Erro no cadastro:', error)

      if (error.response?.data) {
        setError(
          Object.values(error.response.data).join(', ')
        )
      } else {
        setError('Erro ao realizar cadastro.')
      }

    } finally {

      setLoading(false)

    }
  }

  return (
    <div className="register-container">

      <div className="register-card">

        <div className="login-avatar">
          <svg viewBox="0 0 24 24">
            <path d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12zm0 2.4c-3.3 0-9.8 1.6-9.8 4.9v2.5h19.6v-2.5c0-3.3-6.5-4.9-9.8-4.9z" />
          </svg>
        </div>

        <h2>Criar conta</h2>
        <p>Cadastre-se para começar</p>

        {error && (
          <p className="error-message">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <svg viewBox="0 0 24 24">
              <path d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12zm0 2.4c-3.3 0-9.8 1.6-9.8 4.9v2.5h19.6v-2.5c0-3.3-6.5-4.9-9.8-4.9z" />
            </svg>
            <input
              type="text"
              placeholder="Seu nome"
              aria-label="Nome"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <svg viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <input
              type="email"
              placeholder="seu@email.com"
              aria-label="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <svg viewBox="0 0 24 24">
              <path d="M18 8h-1V6c0-2.8-2.2-5-5-5S7 3.2 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.7 1.3-3 3-3s3 1.3 3 3v2H9V6zm3 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
            </svg>
            <input
              type="password"
              placeholder="Digite sua senha"
              aria-label="Senha"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="register-button"
            disabled={loading}
          >
            {loading ? 'Criando conta...' : 'Criar conta'}
          </button>

        </form>

        <p className="register-footer">
          Já possui uma conta?{' '}
          <button
            type="button"
            className="login-link"
            onClick={onRegister}
          >
            Entrar
          </button>
        </p>

      </div>

    </div>
  )
}

export default Register