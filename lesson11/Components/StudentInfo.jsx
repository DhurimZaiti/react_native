import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'



const StudentInfo = ({ fullname, position, description, profileImage }) => {
    return (
        <View style={styles.studentInfo}>
          <Image source={profileImage} style={styles.profileImage} />
          <Text style={styles.fullname}>{fullname}</Text>
          <Text style={styles.position}>{position}</Text>
          <Text style={styles.description}>{description}</Text>
          <TouchableOpacity style={styles.hireButton}>
            <Text style={styles.hireButtonText}>HIRE HIM</Text>
          </TouchableOpacity>
    </View>
  );
};


export default StudentInfo


const styles = StyleSheet.create({
    studentInfo: {
        alignItems: "center",
        padding: 20,
        marginTop: -50,
        backgroundColor: "#fff",
        marginHorizontal: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
      },
      profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
      },
      fullname: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 10,
      },
      position: {
        fontSize: 14,
        color: "gray",
      },
      description: {
        fontSize: 14,
        textAlign: "center",
        marginTop: 5,
      },
      hireButton: {
        marginTop: 10,
        backgroundColor: "#f1c40f",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
      },
      hireButtonText: {
        color: "#fff",
        fontWeight: "bold",
      },
})    