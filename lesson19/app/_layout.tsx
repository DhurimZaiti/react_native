import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Image, Text, View } from 'react-native';


export default function Layout() {
  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer
        screenOptions={{ drawerPosition: 'right' }}
        >
          <Drawer.Screen
              name="index" // Matches app/index.js
              options={{
                  drawerLabel: () => (
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                      <Image
                        source={require('../assets/images/react-logo.png')}
                        style={{ width: 20, height: 20, marginRight: 10 }}
                        alt='Image that should be here :P'
                      ></Image>
                    </View>
                  ),
                title: 'Overview',
              }}
          />
          <Drawer.Screen
              name="About" // Matches app/about.js
              options={{
                drawerLabel: 'About',
                title: 'About',
              }}
          />
        <Drawer.Screen
              name="Home" // Matches app/about.js
              options={{
                drawerLabel: 'Home',
                title: 'Home',
              }}
          />
        </Drawer>
      </GestureHandlerRootView>
  );
}

