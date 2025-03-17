import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const movies = [
  { id: '1', title: 'Inception', releaseYear: 2010 },
  { id: '2', title: 'The Dark Knight', releaseYear: 2008 },
  { id: '3', title: 'Interstellar', releaseYear: 2014 },
  { id: '4', title: 'The Matrix', releaseYear: 1999 },
  { id: '5', title: 'The Prestige', releaseYear: 2006 },
];

const MoviesScreen = () => {

  const renderItem = ({ item }) => {
    const isRecent = item.releaseYear >= 2010; // Style differently for recent movies

    return (
      <View style={[styles.item, isRecent && styles.recentItem]}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.year}>Release Year: {item.releaseYear}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 20,
  },
  item: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  recentItem: {
    backgroundColor: '#d3f8e2', // Different background for recent movies
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  year: {
    fontSize: 14,
    color: '#777',
  },
});

export default MoviesScreen;
