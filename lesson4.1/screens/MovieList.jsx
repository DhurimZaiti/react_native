import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const movies = [
  { id: "1", title: "Inception", year: 2010 },
  { id: "2", title: "The Dark Knight", year: 2008 },
  { id: "3", title: "Interstellar", year: 2014 },
  { id: "4", title: "The Matrix", year: 1999 },
  { id: "5", title: "Parasite", year: 2019 },
  { id: "6", title: "The Godfather", year: 1972 },
];

const MoviesScreen = () => {
  const renderItem = ({ item }) => (
    <View style={[styles.item, item.year >= 2000 ? styles.newMovie : styles.oldMovie]}> 
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.year}>{item.year}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },
  item: {
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
    alignItems: "center",
  },
  newMovie: {
    backgroundColor: "#4CAF50", 
  },
  oldMovie: {
    backgroundColor: "#FFC107", 
  },
  title: { fontSize: 18, fontWeight: "bold", color: "white" },
  year: { fontSize: 14, color: "white" },
});

export default MoviesScreen;
