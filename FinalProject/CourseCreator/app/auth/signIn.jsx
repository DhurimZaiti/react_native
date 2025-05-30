import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable} from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { useRouter } from 'expo-router'

export default function SignIn() {
    const router = useRouter();
  

  return (
    <View style={styles.container}>
          <Image 
            source={require('../../assets/images/logos/logo.png')}
            style={styles.logo}
          />
    
          <Text style={styles.buttonCreate}>Log in to your account</Text>

          <TextInput placeholder='Email' 
          style={styles.textInput}
            />
              <TextInput placeholder='Password'
                  secureTextEntry={true} 
                  style={styles.textInput}
              />
    
          <TouchableOpacity
          style={styles.registerButton}
          
          ><Text style={styles.registerText}>Log in</Text></TouchableOpacity>
    
          <View style={styles.registerNotContainer}>
            <Text style={{ 
              fontFamily: "outfit"
             }}>Don&rsquo;t have an account?</Text>
            <Pressable
              onPress={() => router.push('/auth/signUp')}
            ><Text style={{ 
              color: Colors.primary,
              fontFamily: 'outfit-bold',
             }}>Sign In Here</Text></Pressable>
          </View>
        
        </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    alignItems: 'center',
    paddingTop: 100,
    flex: 1,
    padding: 25,
    backgroundColor: Colors.white
  },
  logo: {
    width:180,
    height: 180,
  },
  buttonCreate: {
    fontSize: 30,
    fontFamily: 'outfit-bold',
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    width: "100%",
    fontSize: 18,
    marginTop: 20,
    borderRadius: 8,
  },
  registerButton: {
    padding: 15,
    backgroundColor: Colors.primary,
    width: "100%",
    marginTop: 25,
    borderRadius: 10,
  },
  registerText: {
    fontFamily: 'outfit',
    fontSize: 20,
    color: Colors.white,
    textAlign: "center"

  },
  registerNotContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    marginTop: 20
  }
})