import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'

// 1. creating the context
const authContext = createContext()

function UserProvider(props){

    const [user,setUser] = useState(null)

    async function validateToken(){
        // first get the token from localStorage
        const token = localStorage.getItem("token")
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/auth/verify`,{headers:{Authorization:`Bearer ${token}`}})
        console.log(response.data)
        setUser(response.data)
    }

    useEffect(()=>{
        validateToken()
    },[])


    const contextValues = {validateToken,user}
    return(
        <authContext.Provider value={contextValues}>
            {props.children}
        </authContext.Provider>
    )
}


export {UserProvider, authContext}