
import { View, Text,TouchableOpacity, StyleSheet } from 'react-native'
import React,{useEffect} from 'react'
import { Ionicons  } from '@expo/vector-icons'
import * as ScreenOrientation from 'expo-screen-orientation';
export default function ButtonCustom({title,onPress, icon, color, size}) {
    useEffect(()=>{
      async()=>{ 
        let realOrientation  = await  ScreenOrientation.getOrientationAsync()
        console.log(realOrientation)}
      
    },[])
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button]}>
        <Ionicons  name = {icon} size={size} color={color}/>

        
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    button :{
        elevation:5,
        height:'auto',
        flexDirection:'row',
        alignItems:'stretch',
        justifyContent:'center',
        transform: [{ rotate: '90deg' }],
        margin:10,
        
        
    },
    text:{
        fontWeight:'bold',
        fontSize:16,
        color:'#f1f1f1',
        marginLeft:10
    }

})