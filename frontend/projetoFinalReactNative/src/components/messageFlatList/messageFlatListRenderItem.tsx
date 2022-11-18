import React, { useContext } from 'react';
import { FlatList, View } from 'react-native';
import MessageContext from '../../contexts/Message';
import { data } from '../../MockData/mockedImage';
import MessageComponent from '../messageItem/MessageComponent';



type message={
    id:string,
    image_url:string,
    dataTimeValue?:Date 
    name: string   
    
}
export interface Props {
    message: MessageProps[];
  }
// import { Container } from './styles';
interface MessageProps{
    id:string,
    image_url:string,
    dataTimeValue?:Date 
    name: string 
}

const renderItem = ({item})=>{
    return (
        <MessageComponent 
            key={item.id}
            id={item.id}
            image_url={item.image_url}         
            name={item.name}


            />
    )
}


const MessageFlatList: React.FC= () => {
    const{messages}= useContext(MessageContext)
   
  return( 
  <FlatList
  data={messages}
 renderItem={renderItem}
  keyExtractor={(item: MessageProps) => item.id}
   />);
}

export default MessageFlatList;