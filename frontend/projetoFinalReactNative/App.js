 import * as  React from 'react'
 import { NavigationContainer } from "@react-navigation/native";
 import StackNavigator from "./src/navigation/StackNavigator";
 import AuthProvider from './src/contexts/AuthProvider';
 import { DataProvider } from './src/contexts/DataContext';

const App =()=>{
  
    
   return(
  /**@return é JSX*/
      
      <AuthProvider>
      <DataProvider>
      <NavigationContainer>
         <StackNavigator />
       
           
     
       
     
      </NavigationContainer>
      </DataProvider>
      </AuthProvider>
   
   );
 };

 export default App;
