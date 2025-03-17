import React, { useState } from "react";
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Student = ({ name, image, description }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const handlePress = () => {
    Alert.alert("Student Selected", `You selected ${name}`);
  };

  const toggleFavourite = () => {
    setIsFavourite(!isFavourite);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.studentCard}>
        <Image source={{ uri: image }} style={styles.studentImage} />
        <View style={styles.nameContainer}>
          <Text style={styles.studentName}>{name}</Text>
          <TouchableOpacity onPress={toggleFavourite}>
            <FontAwesome name={isFavourite ? "heart" : "heart-o"} size={20} color={isFavourite ? "red" : "gray"} />
          </TouchableOpacity>
        </View>
        <Text style={styles.studentDescription}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const StudentsScreen = () => {
  const students = [
    {
      id: "1",
      name: "Alice Johnson",
      image: "https://via.placeholder.com/100",
      description: "A passionate web developer and designer."
    },
    {
      id: "2",
      name: "Mark Spencer",
      image: "https://via.placeholder.com/100",
      description: "Loves mobile app development and AI."
    },
    {
      id: "3",
      name: "Sophia Lee",
      image: "https://via.placeholder.com/100",
      description: "Front-end specialist with a love for animations."
    }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Students</Text>
      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Student name={item.name} image={item.image} description={item.description} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  studentCard: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  studentImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  studentName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  studentDescription: {
    fontSize: 14,
    textAlign: "center",
    color: "gray",
    marginTop: 5,
  },
});

export default StudentsScreen;
