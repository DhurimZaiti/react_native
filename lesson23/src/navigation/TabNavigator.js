// src/navigation/TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home'; // Adjust according to your file path
import About from '../screens/About'; // Adjust according to your file path
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; // Optional: for custom icons
import Swiper from 'react-native-swiper';
import IosScreen from '../screens/IosScreen';
import AndroidScreen from '../screens/AndroidScreen';



const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1F1F1F',
        },
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#2A2A2A',
          borderTopWidth: 0,
        },
        style: {
          backgroundColor: '#385053'
        },
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#A1A1A1',
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="IOS"
        component={IosScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="phone" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Android"
        component={AndroidScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="android" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
