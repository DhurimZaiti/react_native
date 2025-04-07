import react from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import Swiper from "react-native-swiper";



const Home=({navigation})=>{
    return(
    //     <View style={styles.container}>
    //         <Text>Welcome to Home screen</Text>
    //         <Button 
    //         title="Go to About Screen"
    //         onPress={()=>navigation.navigate('About')}
    //         />

    // <Button 
    //         title="Open Drawer"
    //         onPress={()=>navigation.openDrawer()}
    //         />
    //     </View>
    
        <View style={styles.container}>
            <View style={styles.sliderContainer}>
                <Swiper
                autoplay
                activeDotColor="#22D4FF"
                autoplayTimeout={5}
                >
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

        </View>

)
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    sliderContainer: {
        width: '90%',
        height: 200,
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 10,
        borderRadius: 8,
    },
    imgItem: {
        width: "100%",
        height: "100%",
    },
    item: {
        flex: 1,
        justifyContent: "center",
    }
})

export default Home;