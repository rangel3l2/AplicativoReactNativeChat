import { useNavigation, useRoute } from '@react-navigation/native';
import React,{useEffect, useState, FC} from 'react';
import { Text, View, Image, ImageBackground } from 'react-native';
import styles from '../../components/auth/styles';
import paramsGoogle from '../../MockData/tokenGoogle'
import getProfile from '../../utils/getProfile';
type profile = {
  email : string;
  family_name: string;
  given_name: string;
  locale: string;
  name: string;
  picture: string;


}
type Params = {
  token : string;
}
interface HomeProps {
  
  params: profile;
 
}
const Profile : FC<HomeProps> = (props) => {
  console.log(props)
  // const navigation  = useNavigation()
  // const [profile, setProfile] = useState({} as profile)
     const route = useRoute()
     const profile = route.params as profile
  // const {token} = paramsGoogle as Params;  
  
  // async function loadProfile(){
    

   
  //   const get_profile = await getProfile(token)
  //     setProfile(get_profile)
    
//    }
//   useEffect (()=>{

//     loadProfile()
// },[])
      
// async function handleLogout() {
//   navigation.navigate("Auth")
// }
  return (
    <View style= {styles.container}>
      <ImageBackground source={{}}>

      </ImageBackground>
     <Image source={{ uri: profile.picture }} style={styles.imgLogo} resizeMode={'cover'} ></Image>
      <Text>{profile.name}</Text>
      <Text>{profile.email}</Text>
    </View>
  )
}

export default Profile