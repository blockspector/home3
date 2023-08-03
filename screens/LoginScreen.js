import { StyleSheet, View, Text, ImageBackground, TextInput } from 'react-native'
import React from 'react'
import useAuth from '../hooks/useAuth';

const LoginScreen = () => {
    const {user} = useAuth();
    console.log(user);
 
  return (

    
<View style={styles.container}>
      <Text style={styles.text}>Your Text Goes Here</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#rgba(255 0 255 / 1.0)'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 24, // Adjust the size as per your requirement
    fontWeight: 'bold',
  }
   

});




export default LoginScreen