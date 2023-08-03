import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Text>Hey</Text>
      <Button title="Go to Messages" 
      onPress={() => navigation.navigate('Messages')}
      />
    </View>
  )
}

export default HomeScreen