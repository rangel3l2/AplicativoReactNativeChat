import { View, Text } from 'react-native'
import React from 'react'
import * as AuthSession from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
type AuthResponse = {
    type: string
    params : {
        access_token: string;
    }


    
}
export default async function  () {

    const CLIENT_ID = '316688847124-2o70vasjskplk6m21a4lglpujdtce8el.apps.googleusercontent.com';
    const REDIRECT_URI = 'https://auth.expo.io/@rangel3l/projetofinal';
    const RESPONSE_TYPE =  'token';
    const SCOPE = encodeURI('profile email');
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
    return await AuthSession.startAsync({authUrl}) as AuthResponse;
}