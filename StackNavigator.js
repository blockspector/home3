import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MessagesScreen from './screens/MessagesScreen';
import LoginScreen from './screens/LoginScreen';
import useAuth from './hooks/useAuth';



const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const {user} = useAuth();
  return (
    <Stack.Navigator>
        {user ? (
            <>
    <Stack.Screen name="Messages" component={MessagesScreen} />
    <Stack.Screen name="Home" component={HomeScreen} />
    </>
        ): (
    <Stack.Screen name="Login" component={LoginScreen} />
        )}
  </Stack.Navigator>
  )
}

export default StackNavigator