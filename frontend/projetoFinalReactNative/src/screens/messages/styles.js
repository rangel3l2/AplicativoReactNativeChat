import React from 'react'
import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    container: {
        elevation:0,       
        flex: 1,
        
      
    },
    ViewBG:{
        alignSelf:'center',
        width:'100%',
        height:'90%',
    },
    background:{
       
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        borderRadius:20
    },
    messageView:{
        borderRadius:20,
        width:'95%',
        
        
        // backgroundColor:'#fcfcfc'
    },
    cameraView:{
        alignSelf:'center',
        justifyContent:'center',
        
        
    },
    sendView:{
        width:'95%',
        elevation:2,
        alignSelf:'center',
        borderRadius:20,
        backgroundColor:'#fff2e0'
    },
    camera:{
        
    }
    
})
export default styles