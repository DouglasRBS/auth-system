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
    <div className="login-container">

      <div className="login-card">

        <div className="login-header">
          <h2>Criar conta</h2>
          <p>Cadastre-se para começar</p>
        </div>

        {error && (
          <p className="error-message">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Nome</label>

            <input
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>

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
            {loading ? 'Criando conta...' : 'Criar conta'}
          </button>

        </form>

        <p className="login-footer">
          Já possui uma conta?{' '}
          <span onClick={onRegister}>
            Entrar
          </span>
        </p>

      </div>

    </div>
  )
}

export default Register