import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import data from '../data/countries.json';

const CountriesScreen = () => {
    const [countries, setCountries] = useState([]);
    const [searchText, setSearchText] = useState(''); // State for search text
    const navigation = useNavigation();

    useEffect(() => {
        setCountries(data);
    }, []);

    // Filtered list based on search text
    const filteredCountries = countries.filter(country =>
        country.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>CountriesScreen</Text>

            {/* Search Bar */}
            <TextInput
                style={styles.searchInput}
                placeholder="Search for a country..."
                placeholderTextColor="#666"
                value={searchText}
                onChangeText={setSearchText}
            />

            <FlatList
                data={filteredCountries} // Use the filtered list
                keyExtractor={(item) => item.id.toString()}
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
    searchInput: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
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
