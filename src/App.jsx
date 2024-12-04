import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Landing from './components/Landing/Landing.jsx'
import SignupForm from './components/SignupForm/SignupForm.jsx'



const App = () => {
  const [user, setUser] = useState(null)

  return (
    <>
      <NavBar user={user} />
      <Routes>
        {user ? (
        <Route path='/' element={<Dashboard user={user} />}/>
      ) : (
        <Route path='/' element={<Landing />}/>
      )}
      <Route path='/signup' element={<SignupForm setUser={setUser}/>}/>
      </Routes>
    </>
  )
}

export default App;