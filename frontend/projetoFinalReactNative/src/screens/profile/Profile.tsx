import { useNavigation, useRoute } from '@react-navigation/native';
import React,{useEffect, useState, FC, useContext, } from 'react';
import { Text, View, Image, ImageBackground,TouchableOpacity} from 'react-native';
import stylesGeneral from '../../components/auth/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from '@rneui/themed';
import styles from './styles'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFonts, Roboto_700Bold, Roboto_400Regular, Roboto_100Thin } from '@expo-google-fonts/roboto';
import { DataContext } from './../../contexts/DataContext';

type profile = {
  email : string;
  family_name: string;
  given_name: string;
  locale: string;
  name: string;
  picture: string;


}

const Profile = () => {
  const {profile} = useContext(DataContext)
  const navigation = useNavigation()
  const route = useRoute()
 
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
    Roboto_100Thin

  });
  if (!fontsLoaded) {
    return null;
  }

   
  const xmas = new Date();
  const year = xmas.getFullYear() ; // returns 95

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
        <Text style ={{fontFamily: 'Roboto_400Regular'}}>Localiza????o:</Text>
        <Ionicons 
            name="navigate-circle" 
            size={24} 
          />
      </View>
      <Text style ={{fontFamily: 'Roboto_700Bold'}}> sua conta foi criada em {profile.locale}</Text>
      <Card.Divider style={{height:20}}/>
      <View style= {styles.cardContainer}>
        <TouchableOpacity onPress={()=>{navigation.navigate('Termos_de_uso' as never) }}>
          <Text style ={{fontFamily: 'Roboto_700Bold'}}>Termos de uso</Text>
        </TouchableOpacity>
        <Ionicons 
            name="receipt" 
            size={24} 
          />
      </View>
      
      </Card>
      
      <TouchableOpacity onPress={()=>{navigation.navigate('Auth' as never) }}>
      <View style = {styles.logoutView}>
      <Ionicons 
            name="log-out" 
            size={24} 
          />
          <Text style ={{fontFamily: 'Roboto_700Bold'}}>Sair da conta</Text>
          </View>
        </TouchableOpacity>
     
      <Text style={styles.versionText}>Vers??o 1.0.0({year})</Text>
      
   
    </SafeAreaView>
  )
}

export default Profile