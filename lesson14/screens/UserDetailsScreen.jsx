// import React, { useEffect, useState } from "react";
// import { View, Text, FlatList, StyleSheet } from "react-native";

// const UserDetails = ({ route }) => {
//     const { userId } = route.params;
//     const [user, setUser] = useState(null);
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         const fetchUserDetails = async () => {
//             const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//             const userData = await userResponse.json();
//             setUser(userData);

//             const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
//             const postsData = await postsResponse.json();
//             setPosts(postsData);
//         };

//         fetchUserDetails();
//     }, [userId]);

//     if (!user) return <Text>Loading...</Text>;

//     return (
//         <View style={styles.container}>
//             <Text style={styles.header}>{user.name}</Text>
//             <Text style={styles.detail}>Username: {user.username}</Text>
//             <Text style={styles.detail}>Email: {user.email}</Text>
//             <Text style={styles.detail}>Phone: {user.phone}</Text>
//             <Text style={styles.detail}>Website: {user.website}</Text>

//             <Text style={styles.subHeader}>Posts</Text>
//             <FlatList
//                 data={posts}
//                 keyExtractor={(item) => item.id.toString()}
//                 renderItem={({ item }) => (
//                     <View style={styles.postContainer}>
//                         <Text style={styles.postTitle}>{item.title}</Text>
//                         <Text style={styles.postBody}>{item.body}</Text>
//                     </View>
//                 )}
//             />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 16,
//         backgroundColor: "#f8f9fa",
//     },
//     header: {
//         fontSize: 24,
//         fontWeight: "bold",
//         textAlign: "center",
//         marginBottom: 10,
//     },
//     detail: {
//         fontSize: 16,
//         marginBottom: 5,
//     },
//     subHeader: {
//         fontSize: 20,
//         fontWeight: "bold",
//         marginTop: 20,
//         marginBottom: 10,
//     },
//     postContainer: {
//         padding: 10,
//         marginVertical: 5,
//         backgroundColor: "#fff",
//         borderRadius: 8,
//         shadowColor: "#000",
//         shadowOpacity: 0.1,
//         shadowOffset: { width: 0, height: 2 },
//         shadowRadius: 4,
//     },
//     postTitle: {
//         fontSize: 16,
//         fontWeight: "bold",
//     },
//     postBody: {
//         fontSize: 14,
//         color: "#666",
//     },
// });

// export default UserDetails;
