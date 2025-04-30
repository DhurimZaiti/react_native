import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";

const SimpleSwiper = () => {
  return (
    <Swiper
      autoplay
      autoplayTimeout={3} // Delay of 3 seconds
      loop={true}
      dot={<View style={styles.dot} />}
      activeDot={<View style={styles.activeDot} />}
    >
      <View style={[styles.slide, { backgroundColor: "#FF6B6B" }]}>
        <Text style={styles.text}>Slide 1</Text>
      </View>
      <View style={[styles.slide, { backgroundColor: "#4ECDC4" }]}>
        <Text style={styles.text}>Slide 2</Text>
      </View>
      <View style={[styles.slide, { backgroundColor: "#FFD93D" }]}>
        <Text style={styles.text}>Slide 3</Text>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  dot: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: "#fff",
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
  },
});

export default SimpleSwiper;
