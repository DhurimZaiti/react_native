import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'


const MenuScreen = (props) => {
    console.log(props);

    return (
        <View>
            <Text style={styles.text}>Welcome to the Menu</Text>
            <Button
                title='Go to users'
                onPress={()=>props.navigation.navigate('User')}
            ></Button>
            <Button
                title='Go to products'
                onPress={()=>props.navigation.navigate('Products')}
            ></Button>
            <Button
                title='Go to Countries'
                onPress={()=>props.navigation.navigate('Countries')}
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