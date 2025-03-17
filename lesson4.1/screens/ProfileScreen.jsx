import React from 'react';
import { Text, View, StyleSheet} from 'react-native';


const ProfileScreen = () => {
  return <View styles={styles.container}>
    <Text styles={styles.text}>Name: John Doe</Text>
    <Text styles={styles.text2}>Age: 25 years old</Text>
    <Text styles={styles.text2}>Bio: Laboriosam vel voluptas et natus et et. Vel iste corrupti repellat rerum voluptates itaque. Quia rem nobis a.</Text>
  </View>
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 30,
    },
    text2: {
        fontSize: 20,
        color: "#121212",
    },
});

export default ProfileScreen;