import { StyleSheet, Text, View } from 'react-native'
import React, { PureComponent } from 'react'
import data from '../data/countries.json'

export default class CountriesScreen extends PureComponent {

    constructor() {
        super()
        this.state = {
                countries: []
        }
    }

    componentDidMount(){
        this.setState({
            countries:data
        })
    }

  render() {
    return (
      <View>
        <Text style={StyleSheet.screenTitle}>CountriesScreen</Text>
        <FlatList
            data={this.state.countries}
            keyExtractor = {countries => countries.id}
            renderItem={({item}) => (
                <View style={styles.cardWrapper}>
                    <Text>Country: {item.name}</Text>
                    <Text>Continent: {item.continent}</Text>
                    <Text>GPD: ${item.gdp} billion</Text>
                </View>

            )}
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
    screenTitle: {
        fontSize: 20,
        textAlign: center,
        marginVertical: 15,
        fontWeight: "bold",
    }
})