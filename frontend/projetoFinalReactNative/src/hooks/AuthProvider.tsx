import React,{useContext, createContext, useState, useEffect} from 'react'

type token = {
    token : string
    setToken?:()=> void
  
        
    }
export const AuthContext = createContext(null)

export default function AuthProvider({children}){
    const [token, setToken] = useState('') 
    return (
        <AuthContext.Provider value={{token , setToken} as token}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => {const useAuth = useContext(AuthContext) as token}

