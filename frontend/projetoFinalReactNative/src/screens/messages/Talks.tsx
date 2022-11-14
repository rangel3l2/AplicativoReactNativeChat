import { View, Text, ImageBackground, TouchableOpacity} from 'react-native'
import React,{FC, useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { BackgroundImage } from '@rneui/base';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Camera, CameraType } from 'expo-camera';


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
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  
  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }
 
 
  return (
    <SafeAreaView style = {styles.container} >
      <ImageBackground style={styles.background} source={require('../../assets/img/whitebg.jpg')}>
      <View style={styles.messageView}></View>
      <View style={styles.sendView}>
      <Camera  type={type}>
      <TouchableOpacity onPress={toggleCameraType} style={styles.cameraView}>
      

      
      <Ionicons 
            name="camera" 
            size={50} 
          />
     
      </TouchableOpacity>
      </Camera>
      </View>
      </ImageBackground>
      
    </SafeAreaView >
  )
}

export default Talks