import { useEffect, useState } from 'react'
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
    <div>
      <h1>Dashboard</h1>

      <p>{message}</p>

      <button onClick={handleLogout}>
        Sair
      </button>
    </div>
  )
}

export default Dashboard