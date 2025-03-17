import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import QuizScreen from './screens/Quiz';
import MenuScreen from './screens/MenuScreen';
import FruitsScreen from './screens/FruitsScreen';
import ChallangeNavigationMenu from './screens/ChallangeNavigationMenu'
import StudentScreen from './screens/StudentScreen';
import ProfileScreen from './screens/ProfileScreenChall';
import BoxScreen from './screens/BoxScreen';
import PostScreen from './screens/PostScreen';
import UserPostsScreen from './screens/UserPostScreen';
import UserDetails from './screens/UserDetailsScreen';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Post" component={PostScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="Box" component={BoxScreen} />
        <Stack.Screen name="Student" component={StudentScreen} />
        <Stack.Screen name="Users" component={UserPostsScreen} />
        <Stack.Screen name="UserDetes" component={UserDetails} />
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
