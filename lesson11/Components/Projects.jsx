import React from "react";
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from "react-native";


const Projects = ({ images = [] }) => {
  return (
    <View style={styles.projectsSection}>
      <View style={styles.projectsHeader}>
        <Text style={styles.projectsTitle}>PROJECTS</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllButton}>View All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.projectsGrid}>
        {images.map((image, index) => (
          <Image key={index} source={image} style={styles.projectImage} />
        ))}
      </View>
    </View>
  );
};


export default Projects;

const styles = StyleSheet.create({
    projectsSection: {
        paddingHorizontal: 20,
        marginTop: 20,
      },
      projectsHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      projectsTitle: {
        fontSize: 16,
        fontWeight: "bold",
      },
      viewAllButton: {
        color: "#f1c40f",
        fontWeight: "bold",
      },
      projectsGrid: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
      },
      projectImage: {
        width: "48%",
        height: 100,
        borderRadius: 10,
      },
})