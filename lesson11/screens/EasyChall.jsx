import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreenChallenge = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.box, styles.boxOne]}>Box 1</Text>
      <Text style={[styles.box, styles.boxTwo]}>Box 2</Text>
      <Text style={[styles.box, styles.boxThree]}>Box 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  box: {
    padding: 20,
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    borderRadius: 5,
  },
  boxOne: { backgroundColor: '#ff6347' },
  boxTwo: { backgroundColor: '#4682b4' },
  boxThree: { backgroundColor: '#32cd32' },
});

export default BoxScreenChallenge;
