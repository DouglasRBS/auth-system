import { useEffect, useState } from 'react'
import '../styles/ProtectedArea.css'
import api from '../services/api'

function ProtectedArea({ onLogout }) {

  const [message, setMessage] = useState('Carregando...')

  useEffect(() => {

    async function loadProtectedArea() {

      try {

        const response = await api.get('/hello')

        setMessage(response.data)

      } catch (error) {

        console.error('Erro ao carregar a área protegida:', error)

        if (error.response?.status === 401) {
          localStorage.removeItem('token')
          onLogout()
          return
        }

        setMessage('Não foi possível carregar os dados.')
      }

    }

    loadProtectedArea()

  }, [])

  function handleLogout() {
    localStorage.removeItem('token')
    onLogout()
  }

  return (
    <div className="protected-area-container">

      <div className="protected-area-card">

        <div className="protected-area-icon">
          🔐
        </div>

        <h1>Área Protegida</h1>

        <p className="protected-area-message">
          {message}
        </p>

        <div className="protected-area-status">
          <span className="status-dot"></span>
          Autenticado com sucesso
        </div>

        <button
          className="logout-button"
          onClick={handleLogout}
        >
          Sair da conta
        </button>

      </div>

    </div>
  )
}

export default ProtectedArea