import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = ({title, url, price}) => {
  return (
    <View>
        //Image
        <View style={styles.card}>
            <Image 
                source={url}
                style={styles.image}
            />
        </View>
        {/* Text */}
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
        </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "black",
        textAlign: "left",
    },
    image: {
        borderTopStartRadius: 8,
        borderTopEndRadius: 8
    },
    price: {
        fontSize: 18,
        fontWeight: "semibold",
        color: "green",
        textAlign: "left",
    }
})