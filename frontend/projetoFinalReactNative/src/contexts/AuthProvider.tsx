import React,{useContext, createContext, useState, useEffect, ReactNode} from 'react'
type Authcontext = {
    children : ReactNode
}

const inicialValue = 
{
    token: '',
    setToken:()=>{},
}
type AuthContextType = {
    token: string,
    setToken:(newState:string)=>void,
    
}
export const AuthContext = createContext<AuthContextType>(inicialValue)

export default function AuthProvider({children}: Authcontext){
    const [token, setToken] = useState(inicialValue.token) 
    return (
        <AuthContext.Provider value={{token, setToken} }>
            {children}
        </AuthContext.Provider>
    )
}
//export const useAuth = () => {const useAuth = useContext<AuthContextType>(AuthContext)}

