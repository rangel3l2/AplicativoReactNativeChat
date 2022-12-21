import styles from "../camera/styles";
import { View, Text, TouchableOpacity, ImageBackground} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import React, {useContext, useState } from 'react';
import { NativeStackNavigationProp} from "@react-navigation/native-stack";
import { RootStackParmams } from "../../navigation/StackNavigator";
import ButtonCustom from "../../components/button/ButtonCustom";
import DataContext from "../../contexts/DataContext";
import { generateRandom } from "expo-auth-session/build/PKCE";
import { data } from './../../MockData/mockedImage';


export default function PrintedCamera({photo, setPhoto}) {
  const date = new Date()
  const {messages, setMessages, profile} = useContext(DataContext)
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParmams>>()
    const sendPic = () =>{
   if(photo.base64){
   setMessageFromApiAsync();
    // navigation.navigate('Home',{image_url: photo.base64, takepicture: true})    
    navigation.navigate('Root', {
      screen: 'Conversas',
      params: {image_url: photo.base64, takepicture: true},
     
   
         
    });
  }
   }
   const setMessageFromApiAsync = async () => {
    try {
      const response = await fetch(
    'http://10.8.38.198:5000/message', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image_url : photo.base64.toString(), 
        id : generateRandom(10).toString(),
        name: profile?.name,     
        dateTime : date.toString(),
        
      }),
    
    })
    const json = await response.json();
    //console.log(json)
    setMessages([...json.data])
    return json.data;
  } catch (error) {
    console.error(error);
  }
    
  };
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
          // params= {"data:image/jpg;base64," + photo.base64}
          onPress = {sendPic}
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