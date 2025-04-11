import React from 'react'
import Login from './Login'
import UserContextProvider from './Context/UserContextProvider'
import Profile from './Profile'

const App = () => {
  return (
    <UserContextProvider>
      <div style={{ color: "red", background: "black", fontSize: 34, textAlign: "center" }}>Context API</div>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App