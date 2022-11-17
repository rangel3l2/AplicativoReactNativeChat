import React,{useContext, useEffect, useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../../components/auth/styles";
import EnviarCounteudo from "../../components/auth/EnviarCounteudo";
import FormCadastro from "../../components/auth/FormCadastro";
import LoginRedeSocial from "../../components/auth/LoginRedeSocial";
import {getAuth, FacebookAuthProvider,signInWithCredential } from 'firebase/auth'
import {firebase} from "../../../config";
import { LoginManager, AccessToken } from "react-native-fbsdk-next";
import 'expo-dev-client'
import Logo from "../../components/auth/Logo";


import authWithGoogle from "../../utils/authWithGoogle";
import { AuthContext } from "../../contexts/AuthProvider";
type AuthResponse = {
    type: string
    params : {
        access_token: string;
    }

}



const Auth = ({navigation})=>{
const {token,setToken}= useContext(AuthContext)
  //facebook login
const [initializing, setInitializing] = useState(true)
const [user1, setUser1] = useState()

 function onAuthStateChanged(user1){
    setUser1(user1)
    
    console.log('ola mundo')
    
}
useEffect(()=>{

const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged)

return subscriber;

},[])
 const signWithFb =  async() =>{
    try{
        await LoginManager.logInWithPermissions(['public_profile','email'])
        const data = await AccessToken.getCurrentAccessToken()
        if(!data){
            return;
        }
    
    const facebookCredential = FacebookAuthProvider.credential(data.accessToken)
    const auth = getAuth()
    const response = await signInWithCredential(auth, facebookCredential)
    await signInWithCredential(firebase.auth(), facebookCredential)
    console.log(response)

    }catch(e){
        console.log(e)
    }

    const signOut = async () =>{

        try{
            await firebase.auth().signOut()

        }catch(e){
            console.log(e)
        }


    }
    if(initializing) return null
    if(!user1){
        console.log('sign in with facebook')
    }
}



    async function logIn() {
     alert('ola mundo')
      
      }
    //google login
    async function handleSignIn(){
        // const CLIENT_ID = '316688847124-2o70vasjskplk6m21a4lglpujdtce8el.apps.googleusercontent.com';
        // const REDIRECT_URI = 'https://auth.expo.io/@rangel3l/projetofinal';
        // const RESPONSE_TYPE =  'token';
        // const SCOPE = encodeURI('profile email');
        // const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
        // const {type, params} = await AuthSession
        // .startAsync({authUrl}) as AuthResponse
        // if(type === 'success'){
        //     let token = {token : params.access_token}
        //     navigation.push("Home",{token : params.access_token})
        const auth_session = await authWithGoogle() as AuthResponse;
        const {type, params} = await auth_session;
        if(type === 'success'){
                
                 setToken(params.access_token)
                navigation.push("Home")
        }
       
    }

    //auth minha
    const [user, setUser] = useState(  {nome: '', senha: '', login: '', telefone: ''} )

    return (
    
    <SafeAreaView  style = {styles.container}>
    
         <Logo/>
         <LoginRedeSocial
         handleSignIn = {handleSignIn}
         logInFacebook = {signWithFb}
         />
         <FormCadastro
         setUser = {setUser}
         user = {user}
         
         />
         <EnviarCounteudo
         navigation = {navigation}
           //caminhos
           
           />
      
      
    </SafeAreaView>
        
    )
}

export default Auth;

