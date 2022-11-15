import styles from "../camera/styles";
import { View, Text, TouchableOpacity, ImageBackground, SwitchIOS} from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonCustom from "../../components/button/Button";
import { useNavigation } from "@react-navigation/native";
export default function PrintedCamera({photo, setPhoto}) {
    const navigation = useNavigation()
    var ws = new WebSocket('http://192.168.1.107:5000')

    ws.onopen = ('connect',()=>{
        ws.send("usuario entrou")
    })

    
    
    ws.onopen = () => {
        // connection opened
        ws.send('something');  // send a message
      }
      ws.onmessage = (e) => {
        // a message was received
        console.log(e.data);
      }
      
  return (
    <SafeAreaView style = {styles.container}>
        <ImageBackground style={styles.preview} source={{uri: "data:image/jpg;base64," + photo.base64 }}>
          <View style={styles.sendButton}>
         
      <TouchableOpacity style={styles.circleButton} onPress={()=>{
       setPhoto(undefined)
        navigation.navigate('Camera')}}>
    <Text style={styles.text}>x</Text>
    </TouchableOpacity >
          
           <ButtonCustom
         
          title = {''}
          size={60}
           icon={'send'} 
           color = {'#433ddb'}
          />

          </View>
        </ImageBackground>
      </SafeAreaView>
  )
}