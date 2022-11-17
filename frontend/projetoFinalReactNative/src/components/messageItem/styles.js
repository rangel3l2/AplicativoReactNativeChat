import {StyleSheet, Dimensions} from'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container:{
      
       flex:1,
       flexDirection:'column',
        width:windowWidth/1.5,       
        minHeight:windowHeight/2.6,
        margin: 20,
        
         justifyContent:'center',
         alignItems:'center',
         backgroundColor:'#292525',      
         borderRadius:20,
         borderWidth:5,
         borderColor:'#292525',
      


    },
    
   
    imageMessage:{  
       width:'100%',
       height:windowHeight/3, 
       borderRadius:20,
       elevation:5,
       alignSelf:'flex-end',       
       


    },
    textTitle:{
        alignSelf:'baseline',     
        fontSize:15,
        fontWeight:'400', 
        marginLeft:20,
        color:'#85140c',
       
    },
    textTime:{ 
        alignSelf:'flex-end',     
        fontSize:15,
        fontWeight:'400',
        marginRight:10,
        color:'#9e8e8d',
       

      

    }
})
export default styles