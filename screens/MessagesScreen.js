import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const MessagesScreen = () => {
    const navigation = useNavigation();

  return (
    <View>
      <Text>MessagesScreen</Text>
      <Button title="Go to Home" 
      onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

export default MessagesScreen