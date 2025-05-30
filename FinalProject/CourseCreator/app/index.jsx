import { useRouter } from "expo-router";
import { Text, View, Image, StyleSheet, TouchableOpacity} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";


export default function Index() {

  const router = useRouter();


  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}
    >

      <Image 
        source={require("./../assets/images/landing.png")}
        style={styles.landing}
      />

      <View style={styles.text1container}>
        <Text style={styles.text1}>Welcome to CourseCreator</Text>

        <Text style={styles.text2}>Transform your ideas into engaging educational content, effortlessly with AI!</Text>

        <TouchableOpacity style={styles.button}
          onPress={() => router.push('/auth/signUp')}
        >
          <Text style={[styles.buttonText, {color:Colors.primary}]}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>router.push('/auth/signIn')}
        style={[styles.button, {backgroundColor: Colors.primary, borderWidth: 1, borderColor: Colors.white}]}>
          <Text style={[styles.buttonText, {color: Colors.white}]}>Already have an Account?</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  landing: {
    width: '100%',
    height: 300,
    marginTop: 70
  },
  text1container: {
    padding: 25,
    backgroundColor: Colors.primary,
    color: Colors.white,
    height: '100%',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  text1: {
    fontSize: 30,
    textAlign: "center",
    color: Colors.white,
    fontFamily: "outfit-bold",
  },
  text2: {
    fontSize: 20,
    color: Colors.white,
    marginTop: 20,
    textAlign: "center",
    fontFamily: "outfit-bold",
  },
  button: {
    padding: 15,
    backgroundColor: Colors.white,
    marginTop: 20,
    borderRadius: 10,
    fontFamily: "outfit",

  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "outfit",
  }
})