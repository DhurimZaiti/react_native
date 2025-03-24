// import { Text, View, StyleSheet, FlatList } from 'react-native';
// import React, { PureComponent } from 'react';

// export class UsersScreen extends PureComponent {
//     constructor() {
//         super();
//         this.state = {
//             users: []
//         };
//     }

//     async componentDidMount() {
//         const data = await fetch("https://jsonplaceholder.typicode.com/users");
//         const jsonData = await data.json();
//         this.setState({ users: jsonData });
//     }

//     render() {
//         const { users } = this.state;
//         return (
//             <View style={styles.container}>
//                 <Text style={styles.header}>UsersScreen</Text>
//                 <FlatList
//                     keyExtractor={(user) => user.id.toString()}
//                     data={users}
//                     renderItem={({ item }) => (
//                         <View style={styles.userContainer}>
//                             <Text style={styles.userId}>{item.id}</Text>
//                             <Text style={styles.userName}>{item.name}</Text>
//                             <Text style={styles.userEmail}>{item.email}</Text>
//                         </View>
//                     )}
//                 />
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 16,
//         backgroundColor: "#f8f9fa"
//     },
//     header: {
//         fontSize: 24,
//         fontWeight: "bold",
//         marginBottom: 10,
//         textAlign: "center",
//     },
//     userContainer: {
//         padding: 10,
//         marginVertical: 5,
//         backgroundColor: "#fff",
//         borderRadius: 8,
//         shadowColor: "#000",
//         shadowOpacity: 0.1,
//         shadowOffset: { width: 0, height: 2 },
//         shadowRadius: 4,
//         flexDirection: "row",
//         justifyContent: "space-between", // Pushes items apart
//         alignItems: "center"
//     },
//     userId: {
//         fontSize: 16,
//         fontWeight: "bold",
//         width: 30, // Fixed width for alignment
//     },
//     userName: {
//         fontSize: 16,
//         flex: 1, // Takes available space
//         paddingHorizontal: 10, // Space between elements
//     },
//     userEmail: {
//         fontSize: 14,
//         color: "#666666",
//         textAlign: "right", // Aligns text to the right
//         flex: 1, // Allows it to move to the right
//     },
// });

// export default UsersScreen;
