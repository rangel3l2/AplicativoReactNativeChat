import styles from "../camera/styles";
import { View, Text, TouchableOpacity, ImageBackground} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonCustom from "../../components/button/Button";
import { useNavigation } from "@react-navigation/native";
import { DataContext } from '../../contexts/DataContext';
import React, { useContext, useState } from 'react';
import { NativeStackNavigationProp} from "@react-navigation/native-stack";
import { RootStackParmams } from "../../navigation/StackNavigator";

export default function PrintedCamera({photo, setPhoto}) {

    const [profile, setProfile] = useState()
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParmams>>()
    const sendPic = () =>{
    // navigation.navigate('Home',{image_url: photo.base64, takepicture: true})    
    navigation.navigate('Root', {
      screen: 'Conversas',
      params: {image_url: photo.base64, takepicture: true},
    });
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