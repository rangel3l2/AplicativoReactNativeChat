import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Auth from '../screens/auth/Auth';
import Home from '../screens/home/Home';
import CameraExpo from '../screens/camera/Camera';


const Stack = createNativeStackNavigator()
const StackNavigator = () => {
  return(
    <Stack.Navigator screenOptions={{ headerShown: true  }} initialRouteName="Auth">
      
          <Stack.Group>
          
            <Stack.Screen options={{headerShown: false}} name="Auth" component={Auth}/> 
            <Stack.Screen  options={{headerShown: false}} name="Home" component={Home}/>
            <Stack.Screen  options={{headerShown: false}} name="Camera" component={CameraExpo}/>           
                       
              
          </Stack.Group>
          

    </Stack.Navigator>
  );
    
          
      
    
        }


export default StackNavigator