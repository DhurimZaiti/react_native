import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const About = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the About Screen</Text>
      <Button 
            title='Go back to Home'
            onPress={() => navigation.goBack()}
        />
    </View>
  )
}

export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContet: "center",
        backgroundColor: "#121212",
        color: "#fff",
        justifyContent: "center",
    },
    text: {
        color: "white"
    }
})