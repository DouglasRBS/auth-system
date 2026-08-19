import { useState } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('token')
  )

  const [showRegister, setShowRegister] = useState(false)

  if (isAuthenticated) {
    return (
      <Dashboard
        onLogout={() => setIsAuthenticated(false)}
      />
    )
  }

  if (showRegister) {
    return (
      <Register
        onRegister={() => setShowRegister(false)}
      />
    )
  }

  return (
    <Login
      onLogin={() => setIsAuthenticated(true)}
      onRegister={() => setShowRegister(true)}
    />
  )
}

export default App