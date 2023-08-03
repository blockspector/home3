import { View, Text } from 'react-native'
import React, { createContext } from 'react'
import { useContext } from 'react'
import * as Google from 'expo-google-app-auth';

const AuthContext = createContext({});

const config = {
iosClientId: '564980369490-f65j4lrsmmfc9deu8teavmc87o3g23td.apps.googleusercontent.com',
scopes: ['profile', 'email'],
permissions : ['public_profile', 'email', 'gender', 'location'],
}


export const AuthProvider = ({children}) => {


const signInWithGoogle = async () => {
await Google.loginAsync(config).then(async(logInResult) => {
  if(logInResult.type === 'success'){
  }
});
}

  return (
    <AuthContext.Provider 
    value= {{
        user: "user",
        }}
        >
     {children}
    </AuthContext.Provider>
  )
}

export default function useAuth() {
    return useContext(AuthContext);
}

