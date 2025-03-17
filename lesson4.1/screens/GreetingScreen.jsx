import React from 'react';
import { Text, View, StyleSheet} from 'react-native';


const GreetingScreen = () => {
  return <View styles={styles.container}>
    <Text styles={styles.text}>Hello, World!</Text>
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
    }
});

export default GreetingScreen;