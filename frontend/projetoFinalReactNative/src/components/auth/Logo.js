import { View, Text, Image } from 'react-native'
import React from 'react'
import LogoImg from '../../assets/img/logo.jpg'
import styles from './styles'

const Logo = () => {
  return (
    <View>
        <Text style={styles.logoTxt}>ZiG e Zag</Text>
        <Image style={styles.imgLogo} source={LogoImg}></Image>
      
    </View>
  )
}

export default Logo