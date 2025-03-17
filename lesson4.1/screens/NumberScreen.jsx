import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const numbers = Array.from({ length: 20 }, (_, i) => ({ id: (i + 1).toString(), value: i + 1 }));

const NumbersScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}> 
      <Text style={styles.text}>{item.value}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={numbers}
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
    backgroundColor: "#ddd",
  },
  text: { fontSize: 16, fontWeight: "bold" },
});

export default NumbersScreen;
