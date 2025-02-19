import './App.css'
import {Routes ,Route} from 'react-router'
import Login from './pages/Login'
import Homepage from './pages/Homepage'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
