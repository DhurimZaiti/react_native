import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../screens/Home'
import About from '../screens/About'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#ff6347",
    },
    headerTintColor: "white",
}

const MainStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  )
}

export default MainStackNavigator

const styles = StyleSheet.create({})