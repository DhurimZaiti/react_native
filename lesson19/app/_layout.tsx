import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer>
          <Drawer.Screen
              name="index" // Matches app/index.js
              options={{
                drawerLabel: 'Home',
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
