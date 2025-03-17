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
import ListScreen from './screens/ListScreen';
import ItemListScreen from './screens/ItemList';
import ColorsScreen from './screens/ColorsScreen';
import NumbersScreen from './screens/NumberScreen';
import MoviesScreen from './screens/MovieList';
import WelcomeScreen from './screens/WelcomeScreen';
import ViewImageScreen from './screens/ViewImageScreen';



const Stack = createStackNavigator({
  initialRouteName: "ViewImage", 
});



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={WeatherScreen} />
        <Stack.Screen name="Greeting" component={GreetingScreen} /> */}
        <Stack.Screen name="ViewImage" component={ViewImageScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="ItemList" component={ItemListScreen} />
        <Stack.Screen name="Colors" component={ColorsScreen} />
        <Stack.Screen name="Numbers" component={NumbersScreen} />
        <Stack.Screen name="Movies" component={MoviesScreen} />
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
