import { createContext, ReactNode, useState } from "react";
type UserContextProps ={
    children:ReactNode;
}
type UserContextType = {
    isOpenModal: boolean,
    setIsOpenModal:(newState:boolean)=>void,
    
}
const inicialValue = 
{
    isOpenModal: false,
    setIsOpenModal:()=>{},
}


export const Usercontext = createContext<UserContextType>(inicialValue);

export const UserProvider = ({ children }: UserContextProps) => {
    const [isOpenModal,setIsOpenModal]= useState(inicialValue.isOpenModal)
    return (
<Usercontext.Provider value={{isOpenModal,setIsOpenModal}}>
    {children}
    
</Usercontext.Provider>)
}