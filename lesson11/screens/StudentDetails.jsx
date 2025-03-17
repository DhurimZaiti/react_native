
import { Text, StyleSheet, View, FlatList, Image } from 'react-native'
import React, { Component } from 'react'


const StudentDetails = (props) => {
    // console.log(props);


    return (
        <View style={styles.container}>
            <View style={styles.cards}>
                <View style={styles.img}>
                    <Image source={props.image} style={styles.img} />
                </View>
                <View style={styles.info}>
                    <Text style={styles.name}>{props.name}</Text>
                    <Text>{props.description}</Text>
                </View>
            </View>
        </View>
  )
}

export default StudentDetails


const styles = StyleSheet.create({
    container: {

    },
    cards: {
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 8,
        width: "90%",
        alignSelf: "center",
        marginBottom: 15,
    },
    img: {
        width: 100,
        height: 100,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    info: {
        marginTop: 20,
        marginLeft: 20,

    },
    name: {
        fontWeight: "bold",
    },
})