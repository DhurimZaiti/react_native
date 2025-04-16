import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Icons from "../components/Icons"; // assumes you have this component

const iconData = [
  { id: '1', name: 'apple', title: 'iPhone' },
  { id: '2', name: 'android', title: 'Android' },
  { id: '3', name: 'laptop', title: 'Laptop' },
  { id: '4', name: 'tablet', title: 'Tablet' },
  { id: '5', name: 'mouse', title: 'Mouse' },
  { id: '6', name: 'keyboard', title: 'Keyboard' },
];

const DynamicIconsPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Device Categories</Text>
      <FlatList
        data={iconData}
        numColumns={3}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.iconGrid}
        renderItem={({ item }) => (
          <View style={styles.iconItem}>
            <Icons name={item.name} iconText={item.title} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  heading: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
  },
  iconGrid: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  iconItem: {
    margin: 10,
  },
});

export default DynamicIconsPage;
