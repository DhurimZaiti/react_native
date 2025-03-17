import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Button } from 'react-native';


let fruit1 = "apple";
let fruit2 = "banana";

const FruitsScreen = (props) => {
  return (
    <View>
      <Text> {fruit1} </Text>
      <Text> {fruit2} </Text>

      <Button style={styles.button}
          title='Go to Menu'
          onPress={()=>props.navigation.goBack()}
      ></Button>
    </View>
  );
};

export default FruitsScreen;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
});
