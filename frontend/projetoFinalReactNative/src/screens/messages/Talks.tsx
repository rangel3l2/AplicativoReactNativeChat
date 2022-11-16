import { View, Text, ImageBackground, TouchableOpacity} from 'react-native'
import React,{FC, useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, useRoute,  } from '@react-navigation/native';

const io = require('socket.io-client');
const socket = io('http://192.168.1.107:5000');


type profile = {
  email : string;
  family_name: string;
  given_name: string;
  locale: string;
  name: string;
  picture: string;


}
 type message ={
  nome: string,
  url:string
  time?: Date,
  



}

const Talks  = () => {
  const navigation = useNavigation()
  const route = useRoute()
  
 
  console.log(route.params)
 
  useEffect(()=>{
    const profile = route.params as profile 

    // client-side
  socket.on("connect", () => {
    
  //console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});
socket.on("message", () => {
  socket.send("User connected!")
//console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});

  },[])
  
 

 
 
  return (
    <SafeAreaView style = {styles.container} >
      <View style = {styles.ViewBG}>
      <ImageBackground style={styles.background} source={require('../../assets/img/whitebg.jpg')}>
      </ImageBackground>
      </View>
      <View style={styles.messageView}></View>
      <View style={styles.sendView}>
      {/* <Camera  type={type}> */}
      <TouchableOpacity onPress={()=>{navigation.navigate("Camera" as never)}} style={styles.cameraView}>
      

      
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