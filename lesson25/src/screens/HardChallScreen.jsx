import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import axios from "axios";

const { width } = Dimensions.get("window");

const DynamicSwiper = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Mock API with image URLs
    axios.get("https://jsonplaceholder.typicode.com/photos?_limit=5")
      .then((response) => {
        setImages(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch images:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#22D4FF" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Swiper
        autoplay
        autoplayTimeout={3}
        loop={true}
        onIndexChanged={(index) => setCurrentIndex(index)}
        showsPagination={false}
      >
        {images.map((item, index) => (
          <View key={index} style={styles.slide}>
            <Image
              source={{ uri: item.url }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <View style={styles.pagination}>
        <Text style={styles.paginationText}>
          Slide {currentIndex + 1} of {images.length}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: width * 0.9,
    height: 200,
    borderRadius: 10,
  },
  loadingContainer: {
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  pagination: {
    position: "absolute",
    bottom: 10,
    alignSelf: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  paginationText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default DynamicSwiper;
