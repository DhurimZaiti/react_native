import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './screens/MainMenu';
import MiniScreen from './screens/MiniChallenge';
import GreetingScreen from './screens/GreetingScreen';
import WeatherScreen from './screens/Weatherscreen';
import ExerciseScreen from './screens/ExerciseScreen';
import FruitScreen from './screens/FruitScreen';
import QuoteScreen from './screens/QuoteScreen';
import FactsScreen from './screens/FactsScreen';


const Stack = createStackNavigator({
  initialRouteName: "Excercise", 
  screens: {
    Exercise : ExerciseScreen,
  }
});



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={WeatherScreen} />
        <Stack.Screen name="Greeting" component={GreetingScreen} /> */}
        <Stack.Screen name="Exercise" component={ExerciseScreen} />
        <Stack.Screen name="Fruit" component={FruitScreen} />
        <Stack.Screen name="Quote" component={QuoteScreen} />
        <Stack.Screen name="Facts" component={FactsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    color: "#fff",
  },
});
