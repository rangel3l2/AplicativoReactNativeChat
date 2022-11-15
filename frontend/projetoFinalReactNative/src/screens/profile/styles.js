import {StyleSheet,Dimensions } from "react-native";
const {height,width} = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        elevation:0,       
        flex: 1,
        
      
    },
    imageBackgroundNb: {
        width: '100%',
        height: width/3,
      },
      containerEA: {
        alignItems: 'center',
        marginTop: '-15%',
      },
      imgLogo:{
      width: height/5,             
      height: height/6,
      resizeMode: 'cover',
      alignSelf: 'center',
      borderRadius:12
      },
      textPr: {
        width: '100%',
        textAlign: 'center',
        marginTop: 16,
        fontSize:25,
        fontWeight:'700',
        
        
      },
      cardContainer:{
        width:'100%',
        flexDirection: "row",
        justifyContent:"space-between",
        marginTop: '5%',
        
      },
      versionText:{
        position: 'absolute',
        bottom:0,
        alignSelf:'center',
        
        
      },
      logoutView:{
        padding:5,
        alignSelf:'center',        
        alignItems:'center',
        
      }
})
export default styles