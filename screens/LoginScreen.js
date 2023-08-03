import { View, Text } from 'react-native'
import React from 'react'
import useAuth from '../hooks/useAuth';

const LoginScreen = () => {
    const {user} = useAuth();
    console.log(user);
  return (
    <View>
      <Text>Lets get you logged in</Text>
    </View>
  )
}

export default LoginScreen