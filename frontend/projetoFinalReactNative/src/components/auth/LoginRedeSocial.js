import { View, Text } from 'react-native'
import React from 'react'
import BtnRedeSocial from './BtnRedeSocial'
import styles from '../../assets/css/styles'

const LoginRedeSocial = ({handleSignIn, logInFacebook}) => {
  return (
   <View style = {styles.buttonSocialMedia}>
    {/* <BtnRedeSocial

        name = 'facebook'
        background = '#3b5998'
        textBtn= 'Entrar com o Facebook'
        handleSignIn= {logInFacebook}
     /> */}
     <BtnRedeSocial
        handleSignIn = {handleSignIn}
        textBtn= 'Entrar com o Google'
        name = 'google'
        background = '#f0f2f0'
        color = '#f56642'
     />
   </View>
  )
}

export default LoginRedeSocial