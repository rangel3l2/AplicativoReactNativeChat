import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native';
import BottomNavigator from '../navigation/BottomNavigator';



const Home = ({navigation}) => {
    const  nada = {
        token : 'nada'
    }
      const route = useRoute()

      const {token} = route.params ;
      console.log(token)

   
    async function loadProfile(){
      
        const response = await fetch(`https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`)
        const userInfo = await response.json()
        console.log(userInfo)
    }
    useEffect (()=>{
        loadProfile()
    },[])
     
      return (
        <BottomNavigator
        />
      );
    }


export default Home