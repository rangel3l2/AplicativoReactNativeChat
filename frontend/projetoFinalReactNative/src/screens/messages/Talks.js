import { View, Text, ImageBackground, TouchableOpacity} from 'react-native'
import React,{FC, useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, useRoute,  } from '@react-navigation/native';






const Talks  = ({profile}) => {

  

 
 
  return (
    <SafeAreaView style = {styles.container} >
      <View style = {styles.ViewBG}>
      <ImageBackground style={styles.background} source={require('../../assets/img/whitebg.jpg')}>
      </ImageBackground>
      </View>
      <View style={styles.messageView}></View>
      <View style={styles.sendView}>
      {/* <Camera  type={type}> */}
      <TouchableOpacity onPress={()=>{navigation.navigate("Camera")}} style={styles.cameraView}>
      

      
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