import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { PureComponent } from 'react'



export class SingleProduct extends PureComponent {
 
    constructor() {
        super();
        this.state = {
          productIos: [],
          productAndroid: [],
        };
      }
    
      componentDidMount() {
        this.setState({ 
          productIos: data.ios,
          productAndroid: data.android
        });
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
    )
  }
}

export default SingleProduct