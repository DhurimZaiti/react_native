import { StyleSheet, Text, View, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'

const Icons = (props) => {
  return (
    <View style={styles.iconConatiner}>
        <View style={styles.iconWrapper}>
            <MaterialCommunityIcons name={props.name} size={27} color="#22d4ff" />
        </View>
        <Text style={styles.iconText}>{props.iconText}</Text>
    </View>
  )
}

export default Icons

const styles = StyleSheet.create({
    iconWrapper: {
        backgroundColor: "#384053",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
    },
    iconConatiner: {
        alignItems: "center",
        width: 60,
        height: 60,
    },
    iconText: {
        height: 20,
        fontWeight: "600",
    }

})