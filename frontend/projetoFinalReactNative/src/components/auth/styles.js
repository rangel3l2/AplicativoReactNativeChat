import { Button, StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {

        backgroundColor: '#4de8d9',
        flex: 1,
        
      
    },
    
    buttonSocialMedia: { 

        alignSelf:"center",
        minHeight:150,
        height: '10%',
        justifyContent:"space-around",
        backgroundColor:'#4de8d9',    
        alignContent:"center",        
        flexDirection:'column',
        width:'50%',
    
  
    },
    socialBtn:{
        margin:'1%',
    },
  
    textInputView:{

        
        width:'100%',         
        justifyContent:'center',
        height:'30%',      
        backgroundColor:'#fffff',  
        flexDirection:'column',        
        alignItems:"center"        

    },
    input:{
        backgroundColor:  '#e8faf8',      
        marginHorizontal:'auto',
        width:'100%',        
        height: 40,
        margin: 12,       
        padding: 10,
        borderColor: '#61605e',
        borderRadius:5,
         
       
        
        
    },
    text:{
        textAlign:'center',
        fontWeight: '500',
        fontSize:17,
    },
    viewEnviarCounteudo:{
        height:'10%',
        width:'100%',
        flexDirection:'row',    
        alignContent:'center',
        alignItems:'center', 
        justifyContent:"space-around",       
        
    
    },
    Button:{
        backgroundColor:  '#e8faf8', 
        padding: '1%',
        borderRadius: 5,
    },
    imgLogo:{
        width: '60%',             
        height: 200,
        resizeMode: 'stretch',
        alignSelf: 'center'
    },
    logoTxt:{
        alignSelf: 'center',
        fontSize:60,        
        color:'#dde2eb',
        fontWeight:"800",
        fontFamily:'Roboto',
        padding:1,       
        marginBottom:'6%'


        
    }





})
export default styles;