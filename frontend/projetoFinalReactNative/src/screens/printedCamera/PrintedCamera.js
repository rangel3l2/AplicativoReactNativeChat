import styles from "../camera/styles";
import { View, Text, TouchableOpacity, ImageBackground} from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonCustom from "../../components/button/Button";
import { useNavigation } from "@react-navigation/native";
export default function PrintedCamera({photo, setPhoto}) {
    const navigation = useNavigation()
    const sendPic = () =>{
    navigation.navigate('Messages',{data:"data:image/jpg;base64," + photo.base64})

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
          params= {"data:image/jpg;base64," + photo.base64}
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