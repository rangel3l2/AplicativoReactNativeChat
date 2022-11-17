import {StyleSheet, Dimensions} from'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container:{
      
       flex:1,
       flexDirection:'column',
        width:200,       
        minHeight:windowHeight/2.6,
        margin: 20,
        
         justifyContent:'center',
         alignItems:'center',
         backgroundColor:'#fff',
      
       


    },
    
   
    imageMessage:{  
       width:'100%',
       height:windowHeight/3, 
       borderRadius:20,
       elevation:5,
       alignSelf:'flex-end',       
       


    },
    textTitle:{
        alignSelf:'flex-start',     
        fontSize:15,
        fontWeight:'400', 
        marginRight:10
       
    },
    textTime:{ 
        alignSelf:'flex-end',     
        fontSize:15,
        fontWeight:'400',
        marginRight:10
      

    }
})
export default styles