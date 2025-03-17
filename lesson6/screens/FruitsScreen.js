import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

let fruit1 = "apple";
let fruit2 = "banana";

export default class FruitsScree extends Component {
  render() {
    return (
      <View>
        <Text> {fruit1} </Text>
        <Text> {fruit2} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
