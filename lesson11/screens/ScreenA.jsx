import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'


const ScreenA = (props) => {
  return (
    <View>

      <div>ScreenA</div>
      <Button style={styles.button}
          title='Go to Menu'
          onPress={()=>props.navigation.goBack()}
      ></Button>

    </View>
  )
}

export default ScreenA

const styles = StyleSheet.create({})