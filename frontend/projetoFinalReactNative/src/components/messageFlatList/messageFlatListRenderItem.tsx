import React from 'react';
import { FlatList, View } from 'react-native';
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
  return( 
  <FlatList
  data={data}
 renderItem={renderItem}
  keyExtractor={(item: MessageProps) => item.id}
   />);
}

export default MessageFlatList;