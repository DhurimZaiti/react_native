import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainStackNavigator from './src/navigation/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return(
  <NavigationContainer>
    <MainStackNavigator />
  </NavigationContainer>
  )
}

export default App;


