
import { createContext, ReactNode, useState } from 'react';
import { Message } from '../interfaces/MessageInterface';
type MessageContextProps={
    children: ReactNode;

}

type MessagesContextType =

    {
        messages : Message[],
        setMessages : (newValue : Message[] ) => void,

    }

const inicialValue: MessagesContextType = 


    {
        
    messages: 
    [
        {
                id:'',
                image_url: "",       
                name: '',
                dateTime:'',

        }
    ],
       
    
        
        setMessages: ()=> {},
        
    }



export const MessageContext = createContext<MessagesContextType>(inicialValue)

export const MessageProvider = ({ children }: MessageContextProps) => {
 const [messages, setMessages] = useState(inicialValue.messages) 
 
 function add(item : Message) {
    const newMessage = messages
    newMessage.push(item)
    setMessages([...messages])
  
}

    return (
        <MessageContext.Provider value={{messages  , setMessages}}>
            {children}
        </MessageContext.Provider>
    )
}
export default MessageContext
  