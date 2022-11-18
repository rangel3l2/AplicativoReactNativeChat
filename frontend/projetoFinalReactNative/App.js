 import * as  React from 'react'
 import { StatusBar } from 'react-native'
 import { NavigationContainer } from "@react-navigation/native";
 import StackNavigator from "./src/navigation/StackNavigator";
 import AuthProvider from './src/contexts/AuthProvider';
 import { MessageProvider } from './src/contexts/Message';
 const App =()=>{
  
    
   return(
  /**@return é JSX*/
      
      <AuthProvider>
      <MessageProvider>
      <NavigationContainer>
         <StackNavigator />
           
     
       
     
      </NavigationContainer>
      </MessageProvider>
      </AuthProvider>
   
   );
 };

 export default App;
