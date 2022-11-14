import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'





const BtnEnviar = ({navigation,title,action}) => {
  
  
  return (
    <TouchableOpacity 
    onPress={()=>{navigation.navigate(action)}}

    >
      <Text style = {[styles.text, styles.Button]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default BtnEnviar