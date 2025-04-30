import React, { PureComponent } from 'react';
import { ScrollView } from 'react-native'; // or just 'react-native' if not using web
import data from "../data/data.json";
import ProductCard from '../components/IOSProductCards'; // <-- import your card component

export class AndroidScreen extends PureComponent {
  constructor() {
    super();
    this.state = {
      productAndroid: [],
    };
  }

  componentDidMount() {
    this.setState({ productAndroid: data.android });
  }

  render() {
    return (
      <ScrollView>
        {this.state.productAndroid.map(product => (
          <ProductCard
            key={product.id}
            name={product.name}
            category={product.category}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        ))}
      </ScrollView>
    );
  }
}

export default AndroidScreen;
