import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";

const DATA = [
  { id: "1", title: "Item 1" },
  { id: "2", title: "Item 2" },
  { id: "3", title: "Item 3" },
  { id: "4", title: "Item 4" },
  { id: "5", title: "Item 5" },
  { id: "6", title: "Item 6" },
];

const ListScreen = () => {
  const [isGrid, setIsGrid] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsGrid(!isGrid)} style={styles.button}>
        <Text style={styles.buttonText}>{isGrid ? "Switch to List View" : "Switch to Grid View"}</Text>
      </TouchableOpacity>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        numColumns={isGrid ? 2 : 1}
        key={isGrid ? "G" : "L"} // Important for layout switch
        renderItem={({ item }) => (
          <View style={[styles.item, isGrid ? styles.gridItem : styles.listItem]}>
            <Text style={styles.text}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#f8f8f8" },
  button: { backgroundColor: "#007bff", padding: 10, borderRadius: 5, marginBottom: 10, alignItems: "center" },
  buttonText: { color: "#fff", fontWeight: "bold" },
  item: { justifyContent: "center", alignItems: "center", padding: 20, margin: 5, borderRadius: 5, backgroundColor: "#fff", elevation: 3 },
  listItem: { width: "100%" },
  gridItem: { width: "48%" }, // For two-column grid
  text: { fontSize: 16, fontWeight: "bold" },
});

export default ListScreen;
