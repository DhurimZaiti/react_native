import { Text, StyleSheet, View, FlatList, Image } from 'react-native'
import React, { Component } from 'react'


const students = [
    {
        name: "Dhurim",
        surname: "Zaiti",
        age: "15",
        avatar: require('../assets/mom.jpg'),
    },
    {
        name: "Jair",
        surname: "Limani",
        age: "16",
        avatar: require('../assets/sis.jpg'),
    },
    {
        name: "John",
        surname: "Doe",
        age: "23",
        avatar: require('../assets/sis2.jpg'),
    },
]

const ListScreen = () => {
    return (
        <View style={styles.view}>
            <Text style={styles.textStyle}></Text>
            <FlatList 
                keyExtractor={students => students.name}
                data={students}
                renderItem={({item}) => {
                    return(
                        <View style={styles.view2}>
                             <Image style={styles.image} source={item.avatar} />
                            <Text style={styles.textStyle}> {item.name} {item.surname} - {item.age} years old</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
    },
    view2: {
        flexDirection: "row", // Arrange items in a row
        alignItems: "center", // Align items vertically
        marginVertical: 10,  // Add some spacing between items
    },
    view: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    image: {
        width: 50, // Increase size for better visibility
        height: 50,
        marginRight: 10, // Add space between image and text
        borderRadius: 25, // Optional: makes image circular
    }
 });
 

export default ListScreen;