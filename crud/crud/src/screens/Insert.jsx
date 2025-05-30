import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';

class Insert extends React.Component {

  constructor(props) {
        super(props);
        this.state = {
        textInput_Student_Name: '',
        textInput_Student_Class: '',
        textInput_Student_Email: '',
        textInput_Student_Phone_Number: '',
        
        };
    }

     insertStudentData = () => {
    fetch('http://192.168.56.1/php-files/insertStudentData.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        student_name: this.state.textInput_Student_Name,
        student_class: this.state.textInput_Student_Class,
        student_email: this.state.textInput_Student_Email,
        student_phone_number: this.state.textInput_Student_Phone_Number,
      })
    })
    .then((response) => response.json())
        .then((responseJson)=>{

          Alert.alert("Response", JSON.stringify(responseJson));

            
        })
        .catch((error) => {
            console.error(error);
        });
    }



    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Insert Student</Text>
                <TextInput
                    placeholder="Student Name"
                    onChangeText={(text) => this.setState({textInput_Student_Name: text})}
                    style={styles.textInput}
                />
                <TextInput
                    placeholder="Student Class"
                    onChangeText={(text) => this.setState({textInput_Student_Class: text})}
                    style={styles.textInput}
                />
                <TextInput
                    placeholder="Student Email"
                    onChangeText={(text) => this.setState({textInput_Student_Email: text})}
                    style={styles.textInput}
                />
                <TextInput
                    placeholder="Student Phone Number"
                    onChangeText={(text) => this.setState({textInput_Student_Phone_Number: text})}
                    style={styles.textInput}
                />
                
                <TouchableOpacity style={styles.button} onPress={() => this.insertStudentData()}>
                    <Text style={styles.buttonText}>Insert</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    textInput: {
        height: 40,
        width: 300,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
    },
    button: {
        backgroundColor: '#00BCD4',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    text:{
      fontSize:30
    }
});
export default Insert;