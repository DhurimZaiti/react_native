import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import MenuScreen from './screens/MenuScreen';
import CountriesScreen from './screens/CountriesScreen';
import CountryDetailsScreen from './screens/CountryDetailsScreen';
import ProductScreen from './screens/ProductScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Countries" component={CountriesScreen} />
        <Stack.Screen name="Products" component={ProductScreen} />
        <Stack.Screen name="CountryDetails" component={CountryDetailsScreen} />
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
