import { View, Text } from 'react-native'
import React, { createContext } from 'react'
import { useContext } from 'react'
import * as Google from 'expo-google-app-auth';

const AuthContext = createContext({});

const config = {
scopes: ['profile', 'email'],
permissions : ['public_profile', 'email', 'gender', 'location'],
}


export const AuthProvider = ({children}) => {


const signInWithGoogle = async () => {
await Google.loginAsync 
}

  return (
    <AuthContext.Provider 
    value= {{
        user: "Ben",
        }}
        >
     {children}
    </AuthContext.Provider>
  )
}

export default function useAuth() {
    return useContext(AuthContext);
}

