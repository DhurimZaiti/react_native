import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import UserDetailsScreen from "./UserDetails";

const UserScreen = ({ navigation }) => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            setUsers(data);
        };
        fetchUsers();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Users</Text>
            <FlatList
                data={users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.userCard}
                        onPress={() => navigation.navigate("Details", { userId: item.id })}
                    >
                        <Text style={styles.userName}>{item.name}</Text>
                        <Text style={styles.userEmail}>{item.email}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#f8f9fa",
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },
    userCard: {
        padding: 15,
        marginVertical: 5,
        backgroundColor: "#ffffff",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3, // Adds a slight shadow on Android
    },
    userName: {
        fontSize: 18,
        fontWeight: "bold",
    },
    userEmail: {
        fontSize: 14,
        color: "#666",
    },
});

export default UserScreen;
