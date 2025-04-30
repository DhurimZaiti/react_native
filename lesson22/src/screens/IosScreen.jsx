import React, { PureComponent } from 'react';
import { ScrollView } from 'react-native'; // or just 'react-native' if not using web
import data from "../data/data.json";
import ProductCard from '../components/IOSProductCards'; // <-- import your card component

export class IosScreen extends PureComponent {
  constructor() {
    super();
    this.state = {
      productIos: [],
    };
  }

  componentDidMount() {
    this.setState({ productIos: data.ios });
  }

  render() {
    return (
      <ScrollView>
        {this.state.productIos.map(product => (
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

export default IosScreen;
