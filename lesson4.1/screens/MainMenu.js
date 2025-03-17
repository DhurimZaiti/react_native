import React from 'react';
import { StyleSheet, Text, View } from 'react-native';




const MainScreen = () => {
    return <View styles={styles.container}>
        <Text styles={styles.text}>This is the Main Screen</Text>
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 30
    }
});

export default MainScreen;