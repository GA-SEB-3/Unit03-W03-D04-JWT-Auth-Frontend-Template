import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loai from './components/Loai'
import Second from './components/Second'
import { Navigate, Routes ,Route} from 'react-router'
import Login from './components/Login'

function App() {
  // setting value in localStorage
  // localStorage.setItem("token","Aziz")

  // getting the value from localStorage
  // console.log(  localStorage.getItem("token"))

  // localStorage.removeItem("token")

  const user = "not Loai"


  return (
    <>
      {/* <Loai>
        <Second/>
      </Loai> */}

      <Routes>
        <Route path="/loai" element={<Loai/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
