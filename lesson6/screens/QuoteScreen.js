import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

let quote = "Knowledge is Power";
const author = "Francis Bacon";

export default class QuoteScreen extends Component {
  render() {
    return (
      <View>
        <Text> {quote} </Text>
        <Text> {author} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
