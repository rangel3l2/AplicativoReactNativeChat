
import { createContext, ReactNode, useState } from 'react';
import { Message } from '../interfaces/MessageInterface';
import { Profile } from '../interfaces/ProfileInterface';

type DataContextProps={
    children: ReactNode;
    

}

type DataContextType =

    {
        messages : Message[],
        setMessages : (newValue : Message[] ) => void,
        profile : Profile
        setProfile : (newValue : Profile ) => void,

    }

const inicialValue: DataContextType = 


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
        
       profile:
       {
        email : "",
        family_name: "",
        given_name: "",
        locale:"",
        name: "",
        picture: "",
       },
       setProfile:()=>{} 
    }



export const DataContext = createContext<DataContextType>(inicialValue)

export const DataProvider = ({ children }: DataContextProps) => {
 const [messages, setMessages] = useState(inicialValue.messages) 
 const [profile, setProfile] = useState(inicialValue.profile) 
 
 function add(item : Message) {
    const newMessage = messages
    newMessage.push(item)
    setMessages([...messages])
  
}

    return (
        <DataContext.Provider value={{messages  , setMessages, profile, setProfile}}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext
  