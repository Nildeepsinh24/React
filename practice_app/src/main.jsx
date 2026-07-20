import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DashboardApp from './DashboardApp.jsx'
import LoginApp from './LoginApp.jsx'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState('')

  return isLoggedIn ? (
    <DashboardApp
      name={userName}
      onLogout={() => {
        setIsLoggedIn(false)
        setUserName('')
      }}
    />
  ) : (
    <LoginApp
      onLogin={(enteredName) => {
        setUserName(enteredName)
        setIsLoggedIn(true)
      }}
    />
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
