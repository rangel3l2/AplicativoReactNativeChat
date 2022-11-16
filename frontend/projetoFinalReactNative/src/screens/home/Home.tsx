import { View, Text } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native';
import BottomNavigator from '../../navigation/BottomNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../components/auth/styles';
//mocked data testing
import paramsGoogle  from '../../MockData/tokenGoogle'
import MockData from '../../MockData/profile';
import getProfile from '../../utils/getProfile';



type Params = {
  token : string
}
type profile = {
  email : string;
  family_name: string;
  given_name: string;
  locale: string;
  name: string;
  picture: string;


}
interface HomeProps {
  profile: profile,
 
}



const Home  = () => {
  var ws = new WebSocket('http://192.168.1.107:5000')

     
    
    ws.onopen = () => {
        // connection opened
        ws.send('User connected!');  // send a message
      }
      ws.onmessage = (e) => {
        // a message was received
        console.log(e.data);
      }
  const [profile, setProfile] = useState({} as profile)
    const  nada = {
        token : 'nada'
    }
      const route = useRoute()
      
      const {token} =route?.params as Params ?route?.params as Params :  paramsGoogle as Params ;  
     // console.log('teste',token)
   
    async function loadProfile(){
        
     const get_profile = await getProfile(token)
       setProfile(get_profile)
    }
    useEffect (()=>{

        loadProfile()
    },[])
     
      return (
        
          <BottomNavigator 
          profile = {profile}
          
          
          />
     
      );
    }


export default Home