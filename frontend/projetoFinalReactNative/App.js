 import * as  React from 'react'
 import { StatusBar } from 'react-native'
 import { NavigationContainer } from "@react-navigation/native";
 import StackNavigator from "./src/navigation/StackNavigator";
 import AuthProvider from './src/hooks/AuthProvider';
 
 const App =()=>{
  
    
   return(
  /**@return é JSX*/
    
      <AuthProvider>
      <NavigationContainer>
         <StackNavigator />
           
     
       
     
      </NavigationContainer>
      </AuthProvider>
   
   );
 };

 export default App;
