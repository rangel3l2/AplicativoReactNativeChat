

import React from 'react';
import { View, Text,Image } from 'react-native';
import { data } from '../../MockData/mockedImage';
import styles from './styles';


// import { Container } from './styles';
interface MessageProps{
    id:string,
    image_url:string,
    dateTime?:string 
    name: string 
}

const MessageComponent: React.FC<MessageProps> = (   {image_url, dateTime, name, id} ) =>
{

  return (
    image_url&&dateTime&&image_url&&name&&<View style={styles.container}>
        <Text style={styles.textTitle}>
            {name}

        </Text>
        <Image resizeMode='stretch' source={{uri: "data:image/jpg;base64," + image_url }} style={styles.imageMessage}/>
       <Text style={styles.textTime}>{dateTime}</Text>
 


     
    </View>

  );
}

export default MessageComponent;