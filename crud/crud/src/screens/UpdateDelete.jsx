import React, {Component} from 'react';

import {StyleSheet, View, TextInput, Text, TouchableOpacity, FlatList, Alert} from 'react-native';

class UpdateDelete extends Component{

    constructor(props){
        super(props)
        this.state = {

            TextInput_Student_ID: '',
            TextInput_Student_Name: '',
            TextInput_Student_Class: '',
            TextInput_Student_Phone_Number: '',
            TextInput_Student_Email: '',

        }
    }

    componentDidMount() {
        if (this.props.route?.params) {
            const { ID, NAME, CLASS, EMAIL, PHONE_NUMBER } = this.props.route.params;
            this.setState({
            TextInput_Student_ID: ID,
            TextInput_Student_Name: NAME,
            TextInput_Student_Class: CLASS,
            TextInput_Student_Phone_Number: PHONE_NUMBER,
            TextInput_Student_Email: EMAIL,
            });
        } else {
            Alert.alert("Error", "No student data received.");
            console.log("route.params is undefined:", this.props.route);
        }
        }
    

    UpdateStudentRecord = () =>{

        fetch('http://192.168.56.1/php-files/updateStudentRecord.php',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                student_id: this.state.TextInput_Student_ID,
                student_name: this.state.TextInput_Student_Name,
                student_class: this.state.TextInput_Student_Class,
                student_phone_number:this.state.TextInput_Student_Phone_Number,
                student_email:this.state.TextInput_Student_Email
            })

            }).then((response) => response.text())
            .then((responseJson) => {

                    Alert.alert(responseJson);
            
            }).catch((error) => {
                console.log(error);
            });

        }

        render(){

            return(

            <View style={styles.container}>
                <Text style={styles.editText}>Edit Student Record Form</Text>

                <TextInput
                  placeholder='Student Name'
                  value={this.state.TextInput_Student_Name}
                  onChangeText={TextInputValue => this.setState({TextInput_Student_Name : TextInputValue})}
                  style={styles.TextInputStyleClass}
                />

                <TextInput
                  placeholder='Student Class'
                  value={this.state.TextInput_Student_Class}
                  onChangeText={TextInputValue => this.setState({TextInput_Student_Class : TextInputValue})}
                  style={styles.TextInputStyleClass}
                />

                <TextInput
                  placeholder='Student Phone Number'
                  value={this.state.TextInput_Student_Phone_Number}
                  onChangeText={TextInputValue => this.setState({TextInput_Student_Phone_Number : TextInputValue})}
                  style={styles.TextInputStyleClass}
                />

                <TextInput
                  placeholder='Student Email'
                  value={this.state.TextInput_Student_Email}
                  onChangeText={TextInputValue => this.setState({TextInput_Student_Email : TextInputValue})}
                  style={styles.TextInputStyleClass}
                />

                <TouchableOpacity style={styles.touchableOpacityStyle} onPress={this.UpdateStudentRecord}>
                    <Text style={styles.updateText}>Update student record</Text>
                </TouchableOpacity>



            </View>


        );


    }


}


const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center'
    },
    TextInputStyleClass:{
        width: '90%',
        textAlign:'center',
        height:40,
        borderWidth: 1,
        borderColor: '#FF5722',
        borderRadius: 5,
        marginBottom: 7
    },
    editText:{
        marginVertical:20,
        fontWeight: 'bold'
    },
    touchableOpacityStyle:{
        backgroundColor: '#00BCD4',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        width:'90%',
        marginTop: 10
    },
    updateText:{
        color:'white',
        textAlign:'center'
    }


})

export default UpdateDelete;