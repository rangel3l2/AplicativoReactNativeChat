

import React from 'react';
import { View, Text,Image } from 'react-native';
import { data } from '../../MockData/mockedImage';
import styles from './styles';


// import { Container } from './styles';
interface MessageProps{
    id:string,
    image_url:string,
    dataTimeValue?:Date 
    nome: string 
}

const MessageComponent: React.FC<MessageProps> = (   {id='1', image_url, dataTimeValue, nome} ) =>
{

  return (
    <View style={styles.container}>
        <Text style={styles.textTitle}>
            {nome || 'carlos'}

        </Text>
        <Image resizeMode='stretch' source={{uri: "data:image/jpg;base64," + data[0].image }} style={styles.imageMessage}/>
       <Text style={styles.textTime}>ola</Text>
 


     
    </View>

  );
}

export default MessageComponent;