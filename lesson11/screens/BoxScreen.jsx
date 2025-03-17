import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'


const BoxScreen = () => {
  return (
    // <View style={styles.viewStyle} >
    //     <Text style={styles.textStyle}>Box Screen</Text>
    // </View>

    // "row" - in a row, while "row-reverse" - in a row but the opposite direction (Arabic style
    // "col" and "column-reverse" - same thing but in a column.
    <View style={{ 
        flex: 1,
        flexDirection: "col",
        justifyContent: "center",
        // justifyContent: "flex-start, end, center and space-around",
        alignItems: "center",
        // alignItems: "flex-start, center, flex-end, stretch"
        //  alignSelf: "flex-end"
        alignContent: "flex-start",
    }}>
         <Text style={{ width: 80, height: 50, backgroundColor: "powderblue", }}>Hi</Text>
         <Text style={{ width: 60, height: 50, backgroundColor: "skyblue" }}>Hi</Text>
         <Text style={{ width: 50, height: 50, backgroundColor: "steelblue",}}>Hi</Text>
     </View>
    

  )
}

export default BoxScreen


const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: "black",
    },
    textStyle: {
        borderWidth: 1,
        borderColor: "red",
    }
})