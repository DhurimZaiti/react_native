import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const colors = [
  { id: "1", name: "Red", hex: "#FF0000" },
  { id: "2", name: "Green", hex: "#00FF00" },
  { id: "3", name: "Blue", hex: "#0000FF" },
  { id: "4", name: "Yellow", hex: "#FFFF00" },
  { id: "5", name: "Purple", hex: "#800080" },
  { id: "6", name: "Orange", hex: "#FFA500" },
];

const ColorsScreen = () => {
  const renderItem = ({ item }) => (
    <View style={[styles.item, { backgroundColor: item.hex }]}> 
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={colors}
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
  text: { fontSize: 16, fontWeight: "bold", color: "white" },
});

export default ColorsScreen;
