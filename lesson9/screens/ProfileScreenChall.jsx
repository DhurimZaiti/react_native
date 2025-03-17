import React from "react";
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from "react-native";
import Projects from "../Components/Projects";
import StudentInfo from "../Components/StudentInfo";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.banner} />
      <StudentInfo
        fullname="John Doe"
        position="UI/UX Designer"
        description="We're passionate about creating beautiful design for startups & leading brands."
        profileImage={require("../assets/avatar1.jpg")}
      />
      <Projects images={[require("../assets/works.jpg"), require("../assets/works.jpg")]} />

      
    </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  banner: {
    height: 150,
    backgroundColor: "#3498db",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export default ProfileScreen;
