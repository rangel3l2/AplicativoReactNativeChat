import { View, Text, ImageBackground, TouchableOpacity} from 'react-native'
import React,{FC, useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { BackgroundImage } from '@rneui/base';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Camera, CameraType } from 'expo-camera';
import { useNavigation, useRoute,  } from '@react-navigation/native';


export type RootStackParamList = {
  YourScreen: { id: number } | undefined;
};

type profile = {
  email : string;
  family_name: string;
  given_name: string;
  locale: string;
  name: string;
  picture: string;


}
interface HomeProps {
  profile: profile,
 
}
const Talks  = ({profile}) => {
  const navigation = useNavigation()


 
 
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