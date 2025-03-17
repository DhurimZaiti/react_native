import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CountryDetailsScreen = ({ route }) => {
  const { country } = route.params; // Get the selected country's data

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{country.name}</Text>
      <Text style={styles.text}>Continent: {country.continent}</Text>
      <Text style={styles.text}>GDP: ${country.gdp} Billion</Text>
    </View>
  );
};

export default CountryDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
  },
});
