import { View, Text } from 'react-native'
import React,{FC} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../screens/profile/Profile';
import Talks from '../screens/messages/Talks';
import Ionicons from '@expo/vector-icons/Ionicons';
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
  profile: profile;
 
}

const Tab = createBottomTabNavigator();

const BottomNavigator : FC<HomeProps> = ({profile}) => {
  return(
    <Tab.Navigator
    backBehavior='history' 
    screenOptions=
      {{
      tabBarStyle: { height: "10%"},
      }}>
     <Tab.Screen
       
      name="Conversas" 
      component={Talks}
      initialParams = {profile}
      options=
      {{        
        headerShown: false,        
        tabBarIcon: ({ color, size }) =>
         (
        size = 12,
        <Ionicons 
          name="chatbox" 
          size={24} 
          color="black" />
        ),
      }}       
        />   

      {/* <Tab.Screen 
      name="Status"
      component={Status}
      
      options=
      {{
        headerShown: false
      }}  />     */}
    
      <Tab.Screen 
      name="Perfil"       
      component={Profile}
      initialParams = {profile}
      
      options=
      {{
       
        tabBarIcon:()=>(  
          <Ionicons name="ios-person"  size={25}/>  
      ),
        headerShown: false
      }} 
      
      />

    </Tab.Navigator>
  )
}

export default BottomNavigator