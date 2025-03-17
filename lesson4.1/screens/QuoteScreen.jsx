import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const QuoteScreen = () => {
    const quote = "The only way to do great work is to love what you do.";
    let author = "Steve Jobs";

    return (
        <View style={styles.container}>
            <Text style={styles.quote}>&quot;{quote}&quot;</Text>
            <Text style={styles.author}>- {author}</Text>
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
    quote: {
        fontSize: 18,
        fontStyle: 'italic',
        textAlign: 'center',
        marginBottom: 10,
    },
    author: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default QuoteScreen;
