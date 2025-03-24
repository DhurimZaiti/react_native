import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the HomeScreen</Text>
      <Button 
        title='Go To about Screen'
        onPress={() => navigation.navigate("About")}
      />
    </View>
  )
}

export default Home

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