import React, { Component } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

class ProductScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    // Simulate fetching data (replace with API or file fetch if needed)
    const data = require('./products.json');
    this.setState({ products: data });
  }

  renderProduct = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>
        <Text style={styles.nike}>NIKE </Text>
        <Text style={styles.hyper}>{item.name.replace('NIKE ', '')}</Text>
      </Text>
      <Text style={styles.category}>{item.category}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.colors}>
        <View style={[styles.colorCircle, { backgroundColor: '#0b2346' }]} />
        <View style={[styles.colorCircle, { backgroundColor: '#35c436' }]} />
        <View style={[styles.colorCircle, { backgroundColor: '#4a6280' }]} />
      </View>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  );

  render() {
    return (
      <FlatList
        data={this.state.products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={this.renderProduct}
        contentContainerStyle={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: '#fff'
  },
  card: {
    alignItems: 'center',
    marginBottom: 30,
    paddingHorizontal: 15,
  },
  productImage: {
    width: width * 0.7,
    height: width * 0.35,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 24,
    marginTop: 15,
  },
  nike: {
    color: '#0b2346',
    fontWeight: 'bold'
  },
  hyper: {
    color: '#35c436',
    fontWeight: 'bold'
  },
  category: {
    fontSize: 16,
    color: '#555',
    marginVertical: 8
  },
  description: {
    textAlign: 'center',
    color: '#777',
    paddingHorizontal: 20,
    fontSize: 14
  },
  colors: {
    flexDirection: 'row',
    marginVertical: 10
  },
  colorCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginHorizontal: 5
  },
  price: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333'
  }
});

export default ProductScreen;
