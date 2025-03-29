import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from "../screens/Home";
import Contact from "../screens/Contact";
import About from "../screens/About";
import { AboutStackNavigator, MainStackNavigator } from './StackNavigator';
import {MaterialCommunityIcons} from "@expo/vector-icons";

const BottomTabNavigator = () => {
  return (
    <View>
      <Tab.TabNavigator 
      tabBarOptions = {{ 
        activeTintColor: 'white',
        inactiveTintColor: 'lightgrey',
        style: {
            backgroundColor: "#ff6347"
        },
        labelStyle: {
            fontSize: 12,
        }
       }} 
       >
        <Tab.Screen 
            name="Home"
            component={MainStackNavigator}
            option={{ 
                topBarLabel: "Home",
                topBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name='home' size={26} color={color} />
                )
             }}
        />
        <Tab.Screen 
            name="About"
            component={AboutStackNavigator}
            option={{ 
                topBarLabel: "About",
                topBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name='video-stabilization' size={26} color={color} />
                )
             }}
        />
       </Tab.TabNavigator>
    </View>
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({})