import { useState } from 'react'

import Login from './components/Login'
import Register from './components/Register'
import ProtectedArea from './components/ProtectedArea'

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('token')
  )

  const [showRegister, setShowRegister] = useState(false)

  function handleLogout() {
    localStorage.removeItem('token')
    setIsAuthenticated(false)
    setShowRegister(false)
  }

  if (isAuthenticated) {
    return (
      <ProtectedArea onLogout={handleLogout} />
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