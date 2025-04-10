import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ClickCounterScreen = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Click Count: {count}</Text>
      <Button title="Click Me" onPress={() => setCount(count + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f5f5f5" },
  text: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
});

export default ClickCounterScreen;
