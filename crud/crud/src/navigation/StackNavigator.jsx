import Fetch from "../screens/Fetch";
import Insert from "../screens/Insert";
import {createStackNavigator} from '@react-navigation/stack'
import React from "react";
import UpdateDelete from "../screens/UpdateDelete";
const Stack = createStackNavigator();

const screenOptionsStyle = {
    headerStyle: {
        backgroundColor: '#B00B15'
    },
    headerTintColor: 'white'
}

const StackNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator screenOptions = {screenOptionsStyle}>
            <Stack.Screen name="Fetch" component={Fetch} />
            <Stack.Screen name="Insert" component={Insert} />
            <Stack.Screen name="UpdateDelete" component={UpdateDelete} />
        </Stack.Navigator>
    )
}

export default StackNavigator;