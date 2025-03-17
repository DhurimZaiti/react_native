import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const WeatherScreen = () => {
  const [weather, setWeather] = useState({
    temperature: 'Loading...',
    condition: 'Loading...',
    icon: null,
  });

  useEffect(() => {
    setTimeout(() => {
      setWeather({
        temperature: '22°C',
        condition: 'Sunny',
        icon: 'https://openweathermap.org/img/wn/01d@2x.png',
      });
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Current Weather</Text>
      <Text style={styles.text2}>Temperature: {weather.temperature}</Text>
      <Text style={styles.text2}>Condition: {weather.condition}</Text>
      {weather.icon && <Image source={{ uri: weather.icon }} style={styles.icon} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
  text2: {
    fontSize: 20,
    color: '#121212',
  },
  icon: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
});

export default WeatherScreen;
