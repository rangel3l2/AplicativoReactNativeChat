import { View, Text, ImageBackground, TouchableOpacity} from 'react-native'
import React,{FC, useEffect, useContext} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import  Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, useRoute} from '@react-navigation/native';
import { RootStackParmams } from '../../navigation/StackNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DataContext } from '../../contexts/DataContext';
import MessageFlatList from '../../components/messageFlatList/MessageFlatListRenderItem';
import { useState } from 'react';
import { Message } from '../../interfaces/MessageInterface';
import uuid from 'react-native-uuid';

const io = require('socket.io-client')
const socket = io('http://192.168.1.107:5000');

type Params = {
  takepicture : boolean;
  image_url : string;
}


const Talks =() => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParmams>>()
  const route = useRoute() 
  const data = route?.params as Params; 

  const {messages, setMessages, profile} = useContext(DataContext)
  const [message, setMessage] =  useState<object>({}) 
  const date = new Date()
  
   
       
      
   useEffect(()=>{

  //  data?.takepicture&&setMessages(
  //     [...messages,{
  //       id : (messages?.length +3).toString(),
  //       name: profile?.name,
  //       image_url : data?.image_url.toString(),
  //       dateTime : date.toString()

  //     }]
     setMessage(
      {
              id : uuid.v4(),
              name: profile?.name,
              image_url : data?.image_url.toString(),
              dateTime : date.toString()
      
            }
     )
    
  //  )
  },[])
  
  //console.log('message',message)
   /**@setMessages */
   
  
     


  
 

 
 
   /**@clienteSide websocket to client*/
if(data?.takepicture== true)
useEffect(()=>{
socket.on("connect", () => {
   socket.send("User connected!")
console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});
 socket.on("connect", (data) => {
   console.log(data)

// console.log(socket.id); // x8WIv7-mJelg7on_ALbx
 });
 socket.on("message", () => {
 // console.log('mensagem antiga',message)
  socket.emit('message',{"data":message})
console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});

 socket.on("message", (data : Message) => {

   console.log('texto recebido'+data.name)

   setMessages([...messages,{
        id : data.id ,
          name: data.name,     
         dateTime : data.dateTime
   }])

 });

},[message]);
  

  return (
    <SafeAreaView style = {styles.container} >
      <View style = {styles.ViewBG}>
      <ImageBackground style={styles.background} source={require('../../assets/img/whitebg.jpg')}>
      
        {/* <ScrollView  style={styles.containerMsg}  >
       


          <MessageComponent
        id='2'
        image_url=''
        nome=''
        />
       
      
        </ScrollView> */}
        <MessageFlatList
        />
        
      
      </ImageBackground>
      
      
      </View>
      <View style={styles.messageView}></View>
      <View style={styles.sendView}>
      {/* <Camera  type={type}> */}
      <TouchableOpacity onPress={()=>{navigation.navigate('Camera')}} style={styles.cameraView}>
      

      
      <Ionicons 
            name="camera" 
            size={50} 
          />
     
      </TouchableOpacity>
      {/* </Camera> */}
      </View>
    
      
    </SafeAreaView >
  )
}

export default Talks