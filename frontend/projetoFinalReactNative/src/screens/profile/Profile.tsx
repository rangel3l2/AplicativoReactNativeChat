import { useNavigation, useRoute } from '@react-navigation/native';
import React,{useEffect, useState, FC} from 'react';
import { Text, View, Image, ImageBackground, } from 'react-native';
import stylesGeneral from '../../components/auth/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from '@rneui/themed';
import styles from './styles'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFonts, Roboto_700Bold, Roboto_400Regular, Roboto_100Thin } from '@expo-google-fonts/roboto';

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
const Profile = () => {
  const route = useRoute()
  const profile = route.params as profile
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
    Roboto_100Thin

  });
  if (!fontsLoaded) {
    return null;
  }

   
 

  return (
    <SafeAreaView style = {[styles.container]}>
    
      <ImageBackground style={styles.imageBackgroundNb} source={require('../../assets/img/bg_profile.jpg')}>     
      </ImageBackground>
      <View style = {styles.containerEA} >
       
        <Image source={{ uri: profile.picture }} style={styles.imgLogo} resizeMode={'cover'} ></Image>
      </View>
      <Text style= {[styles.textPr,{fontFamily: 'Roboto_700Bold'}]}>{profile.given_name} {profile.family_name}</Text>
      <Card>
        <Card.Divider/>
      <View style= {styles.cardContainer}>
        <Text style ={{fontFamily: 'Roboto_400Regular'}}>Email:</Text>
        <Ionicons 
            name="mail" 
            size={24} 
          />
      </View>
      <Text style ={{fontFamily: 'Roboto_700Bold'}}>{profile.email}</Text>    
     
       
      <Card.Divider style={{height:20}}/>
      <View style= {styles.cardContainer}>
        <Text style ={{fontFamily: 'Roboto_400Regular'}}>Localização:</Text>
        <Ionicons 
            name="navigate-circle" 
            size={24} 
          />
      </View>
      <Text style ={{fontFamily: 'Roboto_700Bold'}}> sua conta foi criada em {profile.locale}</Text>
    
      </Card>
      
   
    </SafeAreaView>
  )
}

export default Profile