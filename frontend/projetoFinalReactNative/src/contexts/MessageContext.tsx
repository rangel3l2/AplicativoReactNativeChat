import { createContext, ReactNode, useState } from "react";
type MessageContextProps={
    children: ReactNode;

}
type message={
    id:string,
    image_url:string,
    dataTimeValue?:Date 
    nome: string   
    
}
                           
const inicialValue = {
    message: {
        id:'',
        image_url: "",       
        nome: '' 
    },
    setMessage: ()=> {}
}
type MessageContextType ={
    message: message,
    setMessage: (newState : message)=> void
}


export const MessageProvider = ({children}:MessageContextProps) =>

{
    const [message, setMessage] = useState(inicialValue.message)


    return(
        <MessageContext.Provider value={{message, setMessage}}>
            {children}

        </MessageContext.Provider>
        

    )
}

export const MessageContext = createContext<MessageContextType>(inicialValue)