import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import data from '../data/countries.json';

const CountriesScreen = () => {
    const [countries, setCountries] = useState([]);
    const navigation = useNavigation(); // Get navigation prop

    useEffect(() => {
        setCountries(data);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>CountriesScreen</Text>
            <FlatList
                data={countries}
                keyExtractor={(item) => item.id.toString()} // Ensure key is a string
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate('CountryDetails', { country: item })}
                    >
                        <Text style={styles.countryName}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default CountriesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f8f8f8',
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    card: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 10,
        marginVertical: 5,
        alignItems: 'center',
    },
    countryName: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
