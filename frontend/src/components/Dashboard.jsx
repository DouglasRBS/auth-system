import { useEffect, useState } from 'react'
import '../styles/Dashboard.css'
import api from '../services/api'

function Dashboard({ onLogout }) {

  const [message, setMessage] = useState('Carregando...')

  useEffect(() => {

    async function loadDashboard() {

      try {

        const response = await api.get('/hello')

        setMessage(response.data)

      } catch (error) {

  console.error('Erro ao carregar dashboard:', error)

  if (error.response?.status === 401) {
    localStorage.removeItem('token')
    onLogout()
    return
  }

  setMessage('Não foi possível carregar os dados.')
}

    }

    loadDashboard()

  }, [])

  function handleLogout() {
    localStorage.removeItem('token')
    onLogout()
  }

  return (
    <div className="dashboard-container">

      <div className="dashboard-card">

        <div className="dashboard-icon">
          🔐
        </div>

        <h1>Dashboard</h1>

        <p className="dashboard-message">
          {message}
        </p>

        <div className="dashboard-status">
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

export default Dashboard