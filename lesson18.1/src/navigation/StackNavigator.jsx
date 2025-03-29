import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#ff6347",
  },
  headerTintColor: "white",
};

// Stack Navigator
const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

//AboutStackNavigator
const AboutStackNavigator=({navigation}) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle} >
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Contact" component={Contact} /> 
    </Stack.Navigator>
  )
}

// Drawer Navigator
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MainStackNavigator} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Contact" component={Contact} />
    </Drawer.Navigator>
  );
};

// App component wrapped in NavigationContainer
const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
export {MainStackNavigator, AboutStackNavigator}

const styles = StyleSheet.create({});
