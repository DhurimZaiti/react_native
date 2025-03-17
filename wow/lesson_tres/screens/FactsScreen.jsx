import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FactsScreen = () => {
    const fact1 = "Honey never spoils.";
    let fact2 = "Bananas are berries, but strawberries aren't.";
    const fact3 = "Octopuses have three hearts.";

    return (
        <View style={styles.container}>
            <Text style={styles.fact1}>{fact1}</Text>
            <Text style={styles.fact2}>{fact2}</Text>
            <Text style={styles.fact3}>{fact3}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    fact1: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ff6347',
        marginBottom: 10,
    },
    fact2: {
        fontSize: 16,
        fontStyle: 'italic',
        color: '#4682b4',
        marginBottom: 10,
    },
    fact3: {
        fontSize: 17,
        color: '#32cd32',
        textAlign: 'center',
    },
});

export default FactsScreen;
