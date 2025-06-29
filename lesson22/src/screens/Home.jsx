import react from "react";
import { Text, View, StyleSheet, Button, Image, ScrollView, FlatList, TouchableOpacity} from "react-native"; 
import Swiper from "react-native-swiper";
import Icons from "../components/Icons";
import Item from "../components/Item";
import data from "../data/data.json";
import React from "react";





class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            product: [],
        };
    } 
    componentDidMount() { 
        this.setState({ product: data });
        console.log(this.state.product);
    } 
    

    sortByPrice = (direction) => {
        const sorted = [...this.state.product.popularproducts].sort((a, b) => {
          const priceA = parseFloat(a.price.replace("$", ""));
          const priceB = parseFloat(b.price.replace("$", ""));
          return direction === "asc" ? priceA - priceB : priceB - priceA;
        });
      
        this.setState((prevState) => ({
          product: {
            ...prevState.product,
            popularproducts: sorted,
          },
        }));
      };
      


    render() {
        return (
            <FlatList
                data={this.state.product.popularproducts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Item item={item} />
                )}
                ListHeaderComponent={
                    <View style={styles.container}>
                        <View style={styles.sortButtons}>
                            <TouchableOpacity
                                style={styles.sortBtn}
                                onPress={() => this.sortByPrice("asc")}
                            >
                                <Text style={styles.sortText}>Sort ↑</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.sortBtn}
                                onPress={() => this.sortByPrice("desc")}
                            >
                                <Text style={styles.sortText}>Sort ↓</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.sliderContainer}>
                            <Swiper 
                                autoplay
                                activeDotColor="#22D4FF"
                                autoplayTimeout={5}>
                                <View style={styles.item}>
                                    <Image
                                        source={require('../../assets/images/laptop1.jpg')}
                                        style={styles.imgItem}
                                        resizeMode="cover"
                                    />
                                </View>
                                <View style={styles.item}>
                                    <Image
                                        source={require('../../assets/images/laptop2.jpg')}
                                        style={styles.imgItem}
                                        resizeMode="cover"
                                    />
                                </View>
                                <View style={styles.item}>
                                    <Image
                                        source={require('../../assets/images/laptop3.jpg')}
                                        style={styles.imgItem}
                                        resizeMode="cover"
                                    />
                                </View>
                                <View style={styles.item}>
                                    <Image
                                        source={require('../../assets/images/laptop4.jpg')}
                                        style={styles.imgItem}
                                        resizeMode="cover"
                                    />
                                </View>
                            </Swiper>
                        </View>
    
                        <View style={styles.iconsContainer}>
                            <Icons name="apple" iconText="Iphone" />
                            <Icons name="android" iconText="Android" />
                            <Icons name="laptop" iconText="Laptop" />
                        </View>
                        <View style={styles.iconsContainer}>
                            <Icons name="tablet" iconText="Tablet" />
                            <Icons name="mouse" iconText="Mouse" />
                            <Icons name="keyboard" iconText="Keyboard" />
                        </View>
    
                        <Text style={styles.title}>Most Popular Products</Text>
                    </View>
                }
                ListFooterComponent={
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>View More</Text>
                    </TouchableOpacity>
                }
            />
        );
    }
    
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    sliderContainer:{
        width:'90%',
        height:200,
        justifyContent:'center',
        alignSelf:'center',
        marginTop:10,
        borderRadius:8
    },
    imgItem:{
        width:'100%',
        height:'100%',
        borderRadius:8
    },
    item:{
        flex:1,
        justifyContent:'center'
    },
    iconsContainer: {
        width: "90%",
        alignSelf: "center",
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        marginTop: 35,
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 16,
    },
    productContainer: {
        marginHorizontal: 20,
    },
    btn: {
        backgroundColor: "#2244ff",
        height: 50,
        borderRadius: 8,
        justifyContent: "center",
        marginBottom: 20,
    },
    btnText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    textStyle: {
        fontSize: 15,
        marginBottom: 20,
    },
    sortButtons: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 10,
        gap: 10,
      },
      sortBtn: {
        backgroundColor: "#22D4FF",
        paddingVertical: 6,
        paddingHorizontal: 15,
        borderRadius: 6,
      },
      sortText: {
        color: "#fff",
        fontWeight: "600",
      },      
})

export default Home;

