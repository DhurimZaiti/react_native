import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FruitScreen = () => {
    const fruit1 = 'Apple';
    let fruit2 = 'Banana';

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Fruit 1: {fruit1}</Text>
            <Text style={styles.text}>Fruit 2: {fruit2}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
    },
});

export default FruitScreen;
