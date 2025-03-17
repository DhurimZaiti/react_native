import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, Button, Alert } from 'react-native'




const ExerciseScreen = () => {
    let message = "Hi there from the Exercise Screen";
    const msg = "This is a const variable and cannot be changed."
    // message="Hi there from React Native"
  
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{ message }</Text>
            <Text style={styles.text}>{ msg }</Text>

            {/* <Image style={styles.image} source={require("../assets/favicon.png")} /> */}
            <Image style={styles.image} source={{uri:("https://picsum.photos/100")}} />
            <Image
            blurRadius={0} 
            fadeDuration={5000}
            source={{
                width:100,
                height:100,
                uri:("https://picsum.photos/seed/picsum/100")}} />
            {/* Okay way, but I think using styles would be better. */}
            <Button title='Click Me' onPress={()=>Alert.alert("My Title", "This message is massive", [
                {text:"Yes", onPress:()=>console.log("MASSIVE")},
                {text:"No", onPress:()=>console.log("NOT MASSIVE")},
            ])}></Button>
            {/* <Button title='Click Me' onPress={()=>console.log("MASSIVE")}></Button> */}

        </View>
  ) 
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#000",
    },
    image: {
        width: 100,
        height: 100,
    },
});

export default ExerciseScreen