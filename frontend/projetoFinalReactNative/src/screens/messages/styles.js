import React from 'react'
import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    container: {
        elevation:0,       
        flex: 1,
        
      
    },
    background:{
        alignSelf:'center',
        width:'95%',
        height:'95%',
        resizeMode:'cover',
        borderRadius:20
    },
    messageView:{
        borderRadius:20,
        width:'100%',
        height:'95%',
        
        // backgroundColor:'#fcfcfc'
    },
    cameraView:{
        alignSelf:'center',
        justifyContent:'center',
        
        
    },
    sendView:{
        width:'98%',
        elevation:2,
        alignSelf:'center',
        borderRadius:20,
        backgroundColor:'#fff2e0'
    },
    camera:{
        
    }
    
})
export default styles