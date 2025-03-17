import { Text, StyleSheet, View, FlatList } from 'react-native';
import React, { Component } from 'react';

class PostScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }

    async componentDidMount() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const jsonData = await response.json(); // Convert response to JSON
        this.setState({ posts: jsonData.slice(0, 10) }); // Take only the first 10 posts
    }

    render() {
        const { posts } = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Posts</Text>
                <FlatList
                    keyExtractor={(item) => item.id.toString()} // Correct keyExtractor
                    data={posts}
                    renderItem={({ item }) => (
                        <View style={styles.postContainer}>
                            <Text style={styles.postId}>{item.title}</Text>
                            <Text style={styles.postTitle}>{item.body}</Text>
                        </View>
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#f8f9fa"
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },
    postContainer: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: "#fff",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
    postId: {
        fontSize: 16,
        fontWeight: "bold",
    },
    postTitle: {
        fontSize: 14,
        color: "#666666"
    },
});

export default PostScreen;
