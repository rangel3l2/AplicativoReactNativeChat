import { StyleSheet, Text, View, TextInput} from 'react-native'
import React, {useState,useEffect} from 'react'
import styles from '../../assets/css/styles';
import { FontAwesome } from '@expo/vector-icons';
const TextInputCustom = ({keyboardType, placeholder,secureTextEntry, setUser, title, user}) => {
  const [modePassword, Setmodepassword] = useState(secureTextEntry?secureTextEntry:false)
  const [eye , setEye] = useState('eye-slash')
  const [value, setValue] = useState()

    useEffect(()=>{
      
      if(title == 'nome'){
        let updateValue = {nome : value} 
        setUser(user => ({
          ...user,
          ...updateValue

        }))
      }
      if(title == 'login'){
        let updateValue = {login : value}
        setUser(user => ({
          ...user,
          ...updateValue

        }))
      }
      if(title == 'senha'){
        let updateValue = {senha : value}
        setUser(user => ({
          ...user,
          ...updateValue
        }))

      }
      if(title == 'telefone'){
        let updateValue = {telefone : value}
        setUser(user => ({
          
          ...user,
          ...updateValue
        }))

      }

    },[value])
   
    
    useEffect(()=>{

    })
     
    const toggleEye = () =>{
        if(eye == 'eye-slash'){ setEye('eye')  
        Setmodepassword(false) }
        else{ setEye('eye-slash')
        Setmodepassword(true)
        
        
      }
     
    }
  
  return (
       <>
      <View style ={{justifyContent:'center', width: '80%'}}>
      <TextInput
        onChangeText={(e)=>{setValue(e)}}
        style={styles.input}      
        value={value}
        placeholder= {placeholder}
        keyboardType= {keyboardType}        
        secureTextEntry = {modePassword?modePassword:false}
      
      />
      {secureTextEntry&&<FontAwesome  onPress={toggleEye} name={eye} size={25}  style={{position : 'absolute', left: '90%'}} />}
      </View>
      </>
      
  )
}

export default TextInputCustom

