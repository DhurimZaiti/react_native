import React, { Component } from "react";
import { Text, View, FlatList, StyleSheet, Image } from "react-native";

const students = [
  {
    id: "1",
    avatar: require("../assets/avatar1.jpg"),
    name: "John",
    lastName: "Doe",
    birthDate: "2000-01-01",
    age: 25,
  },
  {
    id: "2",
    avatar: require("../assets/avatar2.jpg"),
    name: "Jane",
    lastName: "Smith",
    birthDate: "1998-05-10",
    age: 26,
  },
  {
    id: "3",
    avatar: require("../assets/avatar3.jpg"),
    name: "Michael",
    lastName: "Johnson",
    birthDate: "1995-07-20",
    age: 29,
  },
  {
    id: "4",
    avatar: require("../assets/avatar4.jpg"),
    name: "Emily",
    lastName: "Davis",
    birthDate: "1999-12-15",
    age: 24,
  },
];

const favoriteHobies = [
  {
    id: "1",
    name: "Reading",
  },
  {
    id: "2",
    name: "Playing Video Games",
  },
  {
    id: "3",
    name: "Watching Movies",
  },
  {
    id: "4",
    name: "Listening to Music",
  },
];

export default class StudentList extends Component {
  renderStudentItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.avatar} style={{ width: 70, height: 70, borderRadius: 50 }} />
      <View style={{ marginLeft: 15 }}>
        <Text style={styles.name}>
          {item.name} {item.lastName}
        </Text>
        <Text style={styles.details}>Birthdate: {item.birthDate}</Text>
        <Text style={styles.details}>Age: {item.age}</Text>
      </View>
    </View>
  );

  renderHobbyItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Students</Text>
        <FlatList
          data={students}
          keyExtractor={(item) => item.id}
          renderItem={this.renderStudentItem}
        />
        <Text style={styles.sectionTitle}>Favorite Hobbies</Text>
        <FlatList
          data={favoriteHobies}
          keyExtractor={(item) => item.id}
          renderItem={this.renderHobbyItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  details: {
    fontSize: 14,
    color: "#666",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#333",
  },
});
