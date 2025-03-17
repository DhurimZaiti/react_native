import React from "react";
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";

const WelcomeScreen = () => {
  return (
    <ImageBackground 
      source={require("../assets/house.jpg")}  // Change to your actual background image name
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <ImageBackground 
          source={require("../assets/domktransparent.png")}  // Change to your actual logo image name
          style={styles.logo}
        />
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, styles.loginButton]}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.registerButton]}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 100,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 50,
    opacity: 25,
  },
  logo: {
    width: 150,
    height: 150,
  },
  buttonsContainer: {
    width: "100%",
    padding: 0,
  },
  button: {
    width: "100%",
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 0,
    marginVertical: 0,
  },
  loginButton: {
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    backgroundColor: "#4ECDC4",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
