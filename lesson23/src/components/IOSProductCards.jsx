import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

const ProductCard = ({ name, category, description, price, image }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.rating}>{rating}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    margin: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 60,
    height: 100,
    borderRadius: 8,
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  category: {
    color: '#00aaff',
    fontWeight: '500',
    marginBottom: 4,
  },
  rating: {
    color: '#00aaff',
    fontWeight: '500',
    marginBottom: 4,
  },
  description: {
    fontStyle: 'italic',
    color: '#333',
    marginBottom: 6,
  },
  price: {
    backgroundColor: '#333',
    color: '#fff',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
    overflow: 'hidden',
  },
});
