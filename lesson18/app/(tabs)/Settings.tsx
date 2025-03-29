import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useFocusEffect } from 'expo-router';

// Typing the props for Settings component
interface SettingsProps {
  setBadgeCount: React.Dispatch<React.SetStateAction<number>>; // Explicitly typing setBadgeCount
}

const Settings: React.FC<SettingsProps> = ({ setBadgeCount }) => {
  useFocusEffect(
    React.useCallback(() => {
      setBadgeCount((prev) => prev + 1); // Increment the badge count each time Settings is visited
    }, [setBadgeCount]) // Dependency array ensures this effect runs when setBadgeCount changes
  );

  return (
    <View>
      <Text style={{ fontSize: 20, textAlign: "center", marginTop: 20 }}>Settings</Text>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
