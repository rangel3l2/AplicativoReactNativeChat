import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';   
import styles from '../../assets/css/styles';

const BtnRedeSocial = ({name, background,textBtn, color, handleSignIn}) => {
    const loginWithFacebook = () => {
        console.log('Button pressed');
      };    
  return (
    
    <FontAwesome.Button style={styles.socialBtn}  color={color?color:'#fff'} name={name} backgroundColor={background} onPress={handleSignIn}>
        {textBtn}
      </FontAwesome.Button>
      
    
  )
}

export default BtnRedeSocial

