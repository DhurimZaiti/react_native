import { StyleSheet, Text, View, Image, } from 'react-native'
import React from 'react'

const Item = ({ item }) => {
  return (
    <View style={ styles.cardContainer }>
      <View style={ styles.imgContainer }>
        <Image 
            source={{ uri: `${item.image}` }}
            style={ styles.img } resizeMethod="cover" />
      </View>
        <View style={ styles.textContainer }>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.desc}>{item.description}</Text>
            <Text style={styles.price}>{item.price}</Text>

        </View>
    </View>
  )
}

export default Item

const styles = StyleSheet.create({
    cardContainer: {
        width: '100%',
        height: 130,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 16,
    },
    img: {
        width: '100%',
        height: '90%',
        resizeMode: 'cover',
        borderRadius: 8,
        marginTop: 5,
    },
    textContainer: {
        paddingHorizontal: 10,
        width: '70%',
        marginVertical: 10,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,

    },
    category: {
        color: '#22d4ff',
        fontSize: 16,
    },
    desc: {
       fontStyle: 'italic',
    },
    price: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 5,
        backgroundColor: '#384053',
        color: 'white',
        borderRadius: 100,
        paddingHorizontal: 5,
        width: 45,
    },

})