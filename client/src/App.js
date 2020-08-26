import React from 'react'
import { CssBaseline } from '@material-ui/core'
import { useRoutes } from './routes'
import { useAuth } from './hooks/auth.hook'
import { AuthContext } from './context/AuthContext'
import { Navbar } from './components/Navbar'


function App() {

  const { token, userId, login, logout, ready } = useAuth()
  const isAuth = !!token
  const routes = useRoutes(isAuth)

  if (!ready) return <h2>Loading...</h2>

  return (
    <AuthContext.Provider value={{ token, userId, login, logout, isAuth }}>
      <CssBaseline />
      {isAuth && <Navbar />}
      {routes}
    </AuthContext.Provider>
  )
}

export default App
