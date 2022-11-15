import { StyleSheet } from 'react-native'
import {SendButton} from 'react-native-fbsdk-next';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    camera: {
      flex: 1,
      borderRadius: 20
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      marginBottom:20,     
      justifyContent: 'space-around',
      alignItems: 'center',
    
      width:'100%',
      
     
    },
    buttonCamera: {
      flex: 1,
      alignSelf: 'flex-end',
      marginBottom:15,
      marginLeft:'5%'
     
    },
    buttonCircle: {
        flex: 1,
        alignSelf: 'flex-end',
        marginLeft:'-25%'
        
      },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
      alignSelf:'center',
      marginTop:-5,
     
      
      
    },
    textFooter:{
        fontSize: 15,        
        color: 'white',
        alignSelf:'center'
    },
    preview:{
        alignSelf:'stretch',
        flex:1,
        borderRadius:10
   
        
        
        

        
        

    },
    sendButton:{
        flex:1,
       alignContent:'space-between',
       justifyContent:'space-between'
       
      
        
        
        
        
    },
    circleButton:{
      
      alignSelf:'center',
      borderWidth:1,
      borderColor:'rgba(0,0,0,0.2)',
      alignItems:'center',
      textAlign:'center',
      justifyContent:'center',
      width:35,
      height:35,
      elevation:5,
      marginTop:5,
      
      borderWidth:1,
      borderRadius:50,
    },
    exitView:{
      backgroundColor:'#f1f1f1',
      flex:1,
      alignItems:'center',
      textAlign:'center',
      justifyContent:'center',

    }
  });
  export default styles;