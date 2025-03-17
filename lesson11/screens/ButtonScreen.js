import React, { Component } from "react";
import { Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView, withSafeAreaInsets } from "react-native-safe-area-context";


let buttonClick = 0; 
let counterT = 0;

export default class ButtonScreen extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Text style={styles.textStyles}>Button screen</Text>
          <Button title="Click me" color="purple" onPress={()=>console.log("the button is clicked", buttonClick++)} />
          <TouchableOpacity style={styles.touchOpText} onPress={()=>console.log("the button is clicked", counterT++)}>
            <Text style={styles.buttonText} >Click touchable element</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  textStyles: {
    fontSize: 20,
    margin: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  touchOpText:{
    backgroundColor: "purple",
    marginVertical: 15,
    marginHorizontal: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 6,

  }
});
