import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import QuizScreen from './screens/Quiz';
import MenuScreen from './screens/MenuScreen';
import FruitsScreen from './screens/FruitsScreen';
import ChallangeNavigationMenu from './screens/ChallangeNavigationMenu'
import StudentScreen from './screens/StudentScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="Student" component={StudentScreen} />
        <Stack.Screen name="Fruits" component={FruitsScreen} />
        <Stack.Screen name="Challange" component={ChallangeNavigationMenu} />
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
