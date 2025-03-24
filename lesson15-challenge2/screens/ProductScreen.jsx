import React, { Component } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import products from '../data/products.json';

export default class ProductScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.setState({ products }); // Load data into state
  }

  renderProduct = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.category}>{item.category}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={this.renderProduct}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { padding: 10, backgroundColor: '#fff' },
  card: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center'
  },
  image: { width: 200, height: 120, resizeMode: 'contain' },
  name: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  category: { fontSize: 14, color: '#555' },
  description: { fontSize: 12, color: '#666', textAlign: 'center', marginVertical: 5 },
  price: { fontSize: 16, color: '#333', marginTop: 10 },
});
