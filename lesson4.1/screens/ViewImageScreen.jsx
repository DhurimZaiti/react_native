// Path: /screens/ViewImageScreen.js
import React from "react";
import { View, Image, StyleSheet } from "react-native";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.iconBox, styles.closeIcon]} />
      <View style={[styles.iconBox, styles.deleteIcon]} />
      <Image 
        source={require("../assets/lego_image.jpg")}  
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  iconBox: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 40,
  },
  closeIcon: {
    left: 30,
    backgroundColor: "#fc5c65",  // Red
  },
  deleteIcon: {
    right: 30,
    backgroundColor: "#4ECDC4",  // Green
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
