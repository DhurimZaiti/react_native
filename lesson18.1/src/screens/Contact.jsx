import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Contact = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the ContactScreen</Text>
      <Button 
            title='Go back to Home'
            onPress={() => navigation.goBack()}
        />
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContet: "center",
        backgroundColor: "#121212",
        color: "#fff",
        justifyContent: "center",
    },
    text: {
      color: "white",
    }
})