import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';

class Fetch extends Component {
    constructor (props) {
        super(props);
        this.state = {
            students: []
        }
    }

    async componentDidMount () {
        const data = await fetch ("http://192.168.56.1/react_native_CRUD/php-files/ShowAllStudentsList.php");
        const jsonData = await data.json();
        this.setState({
            students:jsonData,
        });
        console.log("Navigation prop:", this.props.navigation);
    }

    
    go_to_update_screen(student_id, student_name, student_class, student_email, student_phone_number) {
        this.props.navigation.navigate('UpdateDelete', {
        ID: student_id,
        NAME: student_name,
        CLASS: student_class,
        EMAIL: student_email,
        PHONE_NUMBER: student_phone_number,
        });
    }
    render() {
        const{students}=this.state;
        return(
            <View style={styles.container}>
                <Text>Students</Text>
                <FlatList
                    keyExtractor={students=>students.student_id}
                    data={students}
                    renderItem={({item})=>(
                        <TouchableOpacity style={styles.touchable}
                        onPress={() =>
                            this.go_to_update_screen(
                                item.student_id,
                                item.student_name,
                                item.student_class,
                                item.student_phone_number,
                                item.student_email
                            )
                        }
                        >
                        <View style={styles.itemContainer}>
                            <View style={styles.row}>
                                <Text style={styles.name}>{item.student_name}</Text>
                                <Text style={styles.class}>{item.student_class}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.phone}>{item.student_phone_number}</Text>
                                <Text style={styles.email}>{item.student_email}</Text>
                            </View>
                        </View>
                        <View style={styles.separator}></View>
                        </TouchableOpacity>
                    )}/>
            </View>
        )
        
    }
}

const styles = StyleSheet.create({
container:{
    flex:1,
    paddingTop: 20,
    marginHorizontal: 20
},
row:{
    flexDirection:'row',
    justifyContent:'space-between'
},
name:{
    fontSize:25,
    color: '#00BCD4'
},
class:{
    fontSize:25,
    color: 'orange'
},
separator:{
    width:'100%',
    height: 1,
    backgroundColor:'orange'
},
itemContainer:{
    paddingVertical:20
}

})

export default Fetch;