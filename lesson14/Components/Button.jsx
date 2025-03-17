import { StyleSheet, Text, Button, View } from 'react-native'
import React from 'react'

const Button = ({ title, color }) => {
  return (
    <View>
        <Button style={{ 
            backgroundColor: {color},
            borderRadius: 8,
            alignItems:center
         }} >{title}</Button>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
})