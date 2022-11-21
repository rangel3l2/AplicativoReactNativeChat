
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Auth from '../screens/auth/Auth';
import Home from '../screens/home/Home';
import CameraExpo from '../screens/camera/Camera';
import TermoUso from '../screens/termo_de_uso/TermoUso';
import Talks from '../screens/messages/Talks';
import PrintedCamera from '../screens/printedCamera/PrintedCamera';
import BottomNavigator from './BottomNavigator';


export type RootStackParmams = {
  Auth;
  Home;
  Camera;
  Termos_de_uso;
  Messages;
  PrintedCamera;
  Message;
  Root;

  
}


const Stack = createNativeStackNavigator<RootStackParmams>()
const StackNavigator = () => {
  return(
    <Stack.Navigator screenOptions={{ headerShown: true  }} initialRouteName="Auth">
      
          <Stack.Group>
            <Stack.Screen options={{headerShown: false}} name="Root" component={BottomNavigator} />
            <Stack.Screen options={{headerShown: false}} name="Auth" component={Auth}/> 
            <Stack.Screen  options={{headerShown: false}} name="Home" component={Home}/>
            <Stack.Screen  options={{headerShown: false}} name="Camera" component={CameraExpo}/> 
            <Stack.Screen  options={{headerShown: false}} name="Termos_de_uso" component={TermoUso}/>
            <Stack.Screen  options={{headerShown: false}} name="Messages" component={Talks}/>
            <Stack.Screen  options={{headerShown: false}} name="PrintedCamera" component={PrintedCamera}/>                
                       
              
          </Stack.Group>
          

    </Stack.Navigator>
  );
    
          
      
    
        }


export default StackNavigator