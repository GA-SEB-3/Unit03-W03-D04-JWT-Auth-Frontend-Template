import React from 'react'
import { Navigate } from 'react-router'
import Login from './Login'

function Loai(props) {
    const user = "Not Loai"

    if(user ==="Loai"){
    return (
    <div>
        {props.children}

        <h2>Loai H2</h2>
    </div>
  )}
  else{
    return(
        <Navigate to={"/login"}/>
    )
  
}}


export default Loai
