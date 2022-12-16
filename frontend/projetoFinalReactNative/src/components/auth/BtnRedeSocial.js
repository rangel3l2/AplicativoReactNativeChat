import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';   
import styles from './styles';
import paramsGoogle from './../../MockData/tokenGoogle';

const BtnRedeSocial = ({name, background,textBtn, color, handleSignIn}) => {
    const loginWithFacebook = () => {
        console.log('Button pressed');
      };    
  return (
    
    <FontAwesome.Button icon="fa-solid fa-text" beatFade  style={styles.socialBtn} fixedWidth  color={color?color:'#fff'} name={name} backgroundColor={background} onPress={handleSignIn}>
       <Text  style = {styles.textButtonSocial}>{textBtn}</Text> 
      </FontAwesome.Button>
      
    
  )
}

export default BtnRedeSocial

