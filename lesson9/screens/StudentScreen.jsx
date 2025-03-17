import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import StudentDetails from './StudentDetails'


const StudentScreen = () => {
  return (
      <View>
        <Text style={styles.text}>Student</Text>
        <StudentDetails 
        name="Dhurim" 
        image={require("../assets/avatar1.jpg")} 
        description="One two three" />
        <StudentDetails 
        name="Jasir" 
        image={require("../assets/avatar2.jpg")} 
        description="One two three" />
        <StudentDetails name="Jane Doe" 
        image={require("../assets/avatar3.jpg")} 
        description="One two three" />
    </View>
  )
}

export default StudentScreen


const styles = StyleSheet.create({
    text: {
        textAlign: "center",
        fontSize: 20,
        marginVertical: 20,
    }
})