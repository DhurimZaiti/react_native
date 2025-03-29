import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import React, { useState } from 'react';
import Settings from './Settings'; // Import the Settings component

export default function TabLayout() {
  const [badgeCount, setBadgeCount] = useState<number>(0);

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#FF8000' }}>
      <Tabs.Screen
        name="Home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="About"
        options={{
          title: 'About',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="pagelines" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
        }}
      />
      {/* Pass the Settings component directly */}
      <Tabs.Screen
        name="Settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="gear" color={color} />,
          tabBarBadge: badgeCount > 0 ? badgeCount : undefined, // Show badge if count > 0
        }}
      >
        {/* This will correctly render the Settings component and pass setBadgeCount */}
        {(props) => <Settings {...props} setBadgeCount={setBadgeCount} />}
      </Tabs.Screen>
      <Tabs.Screen
        name="Contact"
        options={{
          title: 'Contact',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="address-card" color={color} />,
        }}
      />
    </Tabs>
  );
}
