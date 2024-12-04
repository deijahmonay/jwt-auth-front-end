import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Landing from './components/Landing/Landing.jsx'
import SignupForm from './components/SignupForm/SignupForm.jsx'
import SigninForm from './components/SigninForm/SigninForm.jsx'
import * as authService from './services/authService.js'




const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const handleSignout = () => {
    authService.signout()
    setUser(null)
  }

  return (
    <>
      <NavBar user={user} handleSignout={handleSignout}/>
      <Routes>
        {user ? (
        <Route path='/' element={<Dashboard user={user} />} />
      ) : (
        <Route path='/' element={<Landing />}/>
      )}
      <Route path='/signup' element={<SignupForm setUser={setUser}/>} />
      <Route path='/signin' element={<SigninForm setUser={setUser}/>}/>
      </Routes>
    </>
  )
}

export default App;