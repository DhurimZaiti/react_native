import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ( props ) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Home Screen</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('ScreenA')}>
        <Text style={styles.buttonText}>Go to Screen A</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('ScreenB')}>
        <Text style={styles.buttonText}>Go to Screen B</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('ScreenC')}>
        <Text style={styles.buttonText}>Go to Screen C</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
