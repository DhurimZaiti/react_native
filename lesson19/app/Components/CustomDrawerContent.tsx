// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import { DrawerContentComponentProps } from '@react-navigation/drawer';

// export default function CustomDrawerContent({ navigation }: DrawerContentComponentProps) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>My App</Text>

//       {/* Custom Drawer Item with Image */}
//       <TouchableOpacity onPress={() => navigation.navigate('index')} style={styles.item}>
//         <Image
//           source={require('../../assets/images/react-logo.png')}
//           style={{ width: 20, height: 20, marginRight: 10 }}
//         />
//         <Text style={styles.link}>Home</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => navigation.navigate('About')} style={styles.item}>
//         <Text style={styles.link}>About</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => navigation.navigate('home')} style={styles.item}>
//         <Text style={styles.link}>Home</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 60,
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 40,
//   },
//   item: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   link: {
//     fontSize: 18,
//   },
// });
