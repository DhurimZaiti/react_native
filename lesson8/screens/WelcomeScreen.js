import React, { Component } from "react";
import { Text, Image, ImageBackground, StyleSheet, View } from "react-native";

export default class WelcomeScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../assets/37b57509ff47f603e522df4fcb5c3b48.jpg")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.logoContainer} >
          <Image
            style={{ width: 100, height: 100}}
            source={require("../assets/favicon.png")}
          />
          <Text style={{ fontSize: 50, fontWeight: "bold", color: "#fff" }}>Welcome </Text>
        </View>
        <View style={styles.block1}></View>
        <View style={styles.block2}></View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  logoContainer: {
    position: "absolute",
    left: "50%",
    top: "20%",
    transform: [{ translateX: "-50%" }],
    alignItems: "center",
  },
  block1: {
    position: "absolute",
    backgroundColor: "green",
    width: "100%",
    height: 70,
    bottom: 0,
  },
  block2: {
    position: "absolute",
    backgroundColor: "yellow",
    width: "100%",
    height: 70,
    bottom: 70,
  },
});
