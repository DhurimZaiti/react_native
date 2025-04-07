import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {Link} from "expo-router";

export default function WelcomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Link style={styles.button} href={"/Home"}><Text>Go to Home Page</Text></Link>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    welcomeText:{
        fontSize: 30,
        fontWeight: "bold",
        color: "#000",
    },
    button:{
        backgroundColor: "lightgreen",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 20,
    }
})
