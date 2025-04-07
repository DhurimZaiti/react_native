import React, { useRef } from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import Swiper from 'react-native-swiper'; // Make sure this is installed

const About = ({ navigation }) => {
  const swiperRef = useRef(null); // Step 1: Create a ref

  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <Swiper
          ref={swiperRef} // Step 2: Attach the ref
          autoplay
          activeDotColor="#22D4FF"
          autoplayTimeout={5}
          loop={true}
          showsButtons={false} // We use our custom buttons
        >
          <View style={styles.item}>
            <Image
              source={require("../../assets/images/laptop1.jpg")}
              style={styles.imgItem}
              resizeMode="cover"
            />
          </View>
          <View style={styles.item}>
            <Image
              source={require("../../assets/images/laptop2.jpg")}
              style={styles.imgItem}
              resizeMode="cover"
            />
          </View>
          <View style={styles.item}>
            <Image
              source={require("../../assets/images/laptop3.jpg")}
              style={styles.imgItem}
              resizeMode="cover"
            />
          </View>
          <View style={styles.item}>
            <Image
              source={require("../../assets/images/laptop4.jpg")}
              style={styles.imgItem}
              resizeMode="cover"
            />
          </View>
        </Swiper>
      </View>

      {/* Step 3: Buttons */}
      <View style={styles.buttonContainer}>
        <Button title="Previous" onPress={() => swiperRef.current.scrollBy(-1)} />
        <Button title="Next" onPress={() => swiperRef.current.scrollBy(1)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  sliderContainer: {
    width: "90%",
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
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
});

export default About;
