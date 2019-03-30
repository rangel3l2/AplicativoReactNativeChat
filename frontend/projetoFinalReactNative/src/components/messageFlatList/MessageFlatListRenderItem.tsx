import React, { useContext } from 'react';
import { FlatList} from 'react-native';
import MessageContext from '../../contexts/DataContext';
import MessageComponent from '../messageItem/MessageComponent';



 
    

export interface Props {
    message: MessageProps[];
  }
// import { Container } from './styles';
interface MessageProps{
    id:string,
    image_url:string,
    dataTime?:Date 
    name: string 
}

const renderItem = ({item})=>{
    return (
        <MessageComponent 
            key={item.id}
            id={item.id}
            image_url={item.image_url}         
            name={item.name}
            dateTime = {item.dateTime}


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