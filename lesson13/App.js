import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import UserScreen from './screens/UserScreen';
import MenuScreen from './screens/MenuScreen';
import UserDetails from './screens/UserDetails';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="UserDetails" component={UserDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const MoreTabs = createBottomTabNavigator({
  screens: {
    Details: UserDetails,
  },
});

const RootStack = createNativeStackNavigator({
  screens: {
    Menu: MenuScreen,
    More: {
      screen: Us,
      options: {
        headerShown: false,
      },
    },
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    color: "#fff",
  },
});
