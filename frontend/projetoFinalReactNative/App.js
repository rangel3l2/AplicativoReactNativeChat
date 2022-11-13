 import * as  React from 'react'
 import { StatusBar } from 'react-native'
 import { NavigationContainer } from "@react-navigation/native";
 import StackNavigator from "./src/navigation/StackNavigator";
 
 
 const App =()=>{
  
    
   return(
  /**@return é JSX*/
    
    
      <NavigationContainer>
         <StackNavigator />
           
     
       
     
      </NavigationContainer>
    
   
   );
 };

 export default App;
