import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'


const MenuScreen = (props) => {
    console.log(props);

    return (
        <View>
            <Text style={styles.text}>Welcome to the Menu</Text>
            <Button
                title='Go to Profile'
                onPress={()=>props.navigation.navigate('Profile')}
            ></Button>
            <Button
                title='Go to Box Screen'
                onPress={()=>props.navigation.navigate('Box')}
            ></Button>
            <Button
                title='Go to Post Screen'
                onPress={()=>props.navigation.navigate('Post')}
            ></Button>
            <Button
                style={styles.btn}
                title='Go to Students'
                onPress={()=>props.navigation.navigate('Student')}
            ></Button>
            <Button
                style={styles.btn}
                title='Go to Users'
                onPress={()=>props.navigation.navigate('Users')}
            ></Button>
        </View>
    )
}

export default MenuScreen;

const styles = StyleSheet.create({
    text: {
        marginVertical: 20,
        fontSize: 20,
        textAlign: "center",
    },
    text1: {
        color:"white",
        fontSize: 13,
        textAlign: "center",
    },
    button: {
        backgroundColor: "#007bff",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
      },
    btn: {
        color: "white",
        fontSize: 15,
        textTransform: "uppercase",
        textAlign: "center",
    },
})