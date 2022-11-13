import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Status from '../components/home/Status';
import Profile from '../components/home/Profile';
import Contact from '../screens/ContactList';
import Talks from '../components/home/Talks';
const Tab = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Tab.Navigator >
     <Tab.Screen options={{headerShown: false}} name="Conversas" component={Talks}/>   
    <Tab.Screen options={{headerShown: false}}  name="Status" component={Status} />    
    <Tab.Screen options={{headerShown: false}} name="Contatos" component={Contact}/>
    <Tab.Screen options={{headerShown: false}} name="Perfil" component={Profile}/>

  </Tab.Navigator>
  )
}

export default BottomNavigator