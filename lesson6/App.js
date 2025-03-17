import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import studentList from './screens/studentList';
import FruitsScreen from './screens/FruitsScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MoviesScreen from './screens/MovieScreen';
import ButtonScreen from './screens/ButtonScreen';
import QuizScreen from './screens/Quiz';





const Stack = createStackNavigator({
  initialRouteName: "StudentList", 
  screens: {
    WelcomeScreen : WelcomeScreen,
    StudentList : studentList,
    FruitsScreen : FruitsScreen,
    MoviesScreen: MoviesScreen,
    ButtonScreen: ButtonScreen,
    Quiz: QuizScreen,
   }
});



export default function App() {
  return (
    <NavigationContainer screenOptions={{ headerShown: false }}>
      <Stack.Navigator>
      <Stack.Screen name="Quiz" component={QuizScreen} />
      <Stack.Screen name="ButtonScreen" component={ButtonScreen} options={{ headerShown: false }} /> 
      {/* <Stack.Screen name="MoviesScreen" component={MoviesScreen} options={{ headerShown: false }} />  */}
      {/* <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />  */}
      {/* <Stack.Screen name="FruitsScreen" component={FruitsScreen} />  */}
      {/* <Stack.Screen name="StudentList" component={studentList} /> */}
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
