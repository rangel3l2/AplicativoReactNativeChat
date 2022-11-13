import { Text, View } from "react-native"
import React,{useEffect, useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../assets/css/styles";
import EnviarCounteudo from "../components/auth/EnviarCounteudo";
import FormCadastro from "../components/auth/FormCadastro";
import LoginRedeSocial from "../components/auth/LoginRedeSocial";
import {getAuth, FacebookAuthProvider,signInWithCredential } from 'firebase/auth'
import * as AuthSession from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import {firebase} from "../../config";
import { LoginManager, AccessToken } from "react-native-fbsdk-next";

import 'expo-dev-client'
import Logo from "../components/auth/Logo";

//auth
const Auth = ({navigation})=>{

const [initializing, setInitializing] = useState(true)
const [user1, setUser1] = useState()

 function onAuthStateChanged(user1){
    setUser1(user1)
    if(initializing) setInitializing(false)
    
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
    
    async function handleSignIn(){
        const CLIENT_ID = '316688847124-2o70vasjskplk6m21a4lglpujdtce8el.apps.googleusercontent.com';
        const REDIRECT_URI = 'https://auth.expo.io/@rangel3l/projetofinal';
        const RESPONSE_TYPE =  'token';
        const SCOPE = encodeURI('profile email');
        const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
        const response = await AuthSession.startAsync({authUrl}) 
        console.log(authUrl)
        const {params, type,} = response
        
        if(type == 'success')navigation.navigate("Home",{token : params.access_token})
    }

   
    const [user, setUser] = useState(  {nome: '', senha: '', login: '', telefone: ''} )
    useEffect(()=>{
      
        
    },[user])
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

