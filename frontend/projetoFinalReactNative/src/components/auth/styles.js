import { Button, StyleSheet, Dimensions } from "react-native";
import { fontsize } from "../../utils/fontAjust";
const {height,width} = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {

        backgroundColor: '#d3d3f0',
     
        flex: 1,
       
    
        
      
    },
    backgroundImage:{
    
        flex: 1,

    },
    
    buttonSocialMedia: { 
        
        alignSelf:"center",
        minHeight:height/8,
        height: '10%',
        justifyContent:"space-around",
           
        alignContent:"center",        
        flexDirection:'column',
        width:'50%',
    
  
    },
    socialBtn:{
        elevation: 6,
        margin:'1%',
        padding:10,
        textAlign:'center',
        width:'100%'
        
        
       
    },
    textButtonSocial:{
     fontSize: fontsize(12)
    },
   
   
  
    textInputView:{

        
        width:width,         
        justifyContent:'center',
        height:height/2.8,    
         margin:'1%',
        flexDirection:'column',        
        alignItems:"center",        
       
        
        
    },
    input:{
        backgroundColor:  '#e8faf8',      
        marginHorizontal:'auto',
        width:'100%',        
        height: height/18,
        margin: '2%',       
        padding: 10,
        borderColor: '#61605e',
        borderRadius:5,
        

    },
    text:{
        textAlign:'center',
        fontWeight: '500',
        fontSize:fontsize(15),
    },
    viewEnviarCounteudo:{
        height:height/7,
        width:'100%',       
        flexDirection:'row',        
        alignItems:'flex-start', 
        justifyContent:"space-around",       
        
    
    },
    Button:{
        elevation:5,
        backgroundColor:  '#e8faf8', 
        padding: '1%',
        borderRadius: 5,
    },
    imgLogo:{
        width: '60%',             
        height: height/4.2,
        resizeMode: 'stretch',
        alignSelf: 'center',
        borderRadius:50,
       
        

    },
    logoTxt:{
        alignSelf: 'center',
        fontSize:fontsize(53),        
        color:'#dde2eb',
        fontWeight:"800",
        fontFamily:'Roboto',
        padding:1,       
        marginBottom:'3%',
        


        
    }





})
export default styles;