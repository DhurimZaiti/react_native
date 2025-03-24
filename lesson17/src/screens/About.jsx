import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import React from 'react';

const About = ({ navigation }) => {
  // Data for the list
  const aboutData = [
    { id: '1', description: 'App allows you to track your fitness goals.' },
    { id: '2', description: 'Simple and intuitive user interface.' },
    { id: '3', description: 'Supports tracking of various workout activities.' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the About Screen</Text>
      
      {/* FlatList to display the about items */}
      <FlatList 
        data={aboutData}
        renderItem={({ item }) => <Text style={styles.listItem}>{item.description}</Text>}
        keyExtractor={item => item.id}
      />

      <Button 
        title="Go back to Home"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // Corrected 'alignContet' to 'alignItems'
    backgroundColor: '#121212',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    marginBottom: 20, // Added margin for spacing
    fontSize: 18,
  },
  listItem: {
    color: 'white',
    fontSize: 16,
    marginVertical: 10, // Spacing between list items
  },
});
