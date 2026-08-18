import { useState } from 'react'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('token')
  )

  return (
    <>
      {isAuthenticated ? (
        <Dashboard
          onLogout={() => setIsAuthenticated(false)}
        />
      ) : (
        <Login
          onLogin={() => setIsAuthenticated(true)}
        />
      )}
    </>
  )
}

export default App