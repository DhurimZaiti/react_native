import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

let fact1 = "oranged are orange"
const fact2 = "apples are red"
let fact3 = "the sun is white"

export default class FactsScreen extends Component {
  render() {
    return (
      <View>
        <Text style={styles.fact1}> {fact1} </Text>
        <Text style={styles.fact2}> {fact2} </Text>
        <Text style={styles.fact3}> {fact3} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    fact1: {
        color: "orange"
    },
    fact2 : {
        color: "red"
    },
    fact3: {
        color: "purple"
    }
})
