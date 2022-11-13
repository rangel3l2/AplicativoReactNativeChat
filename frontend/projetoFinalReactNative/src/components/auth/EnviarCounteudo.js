import { View, Text } from 'react-native'
import React from 'react'
import BtnEnviar from './BtnEnviar'
import styles from '../../assets/css/styles'


const EnviarCounteudo = ({navigation}) => {
 
  return (
    <View style = {styles.viewEnviarCounteudo}>
          <BtnEnviar
        action= "Home"
        title = "Cadastrar"
        navigation = {navigation}
        

        />
          <BtnEnviar
     
        action = "Login"
        title = "Já tenho conta"
      
        />
      
    </View>
  )
}

export default EnviarCounteudo