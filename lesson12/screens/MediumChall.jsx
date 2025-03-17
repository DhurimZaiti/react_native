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
    position: 'relative',  // Ensures the absolute positioning works relative to this container
  },
  box: {
    padding: 20,
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    borderRadius: 5,
  },
  boxOne: { backgroundColor: '#ff6347' },
  boxTwo: { 
    backgroundColor: '#4682b4',
    position: 'absolute',  // Absolute positioning for centering
    top: '50%',  // Vertically center
    left: '50%',  // Horizontally center
    transform: [
      { translateX: "-50%" },  // Offset to perfectly center horizontally
      { translateY: "-50%" },  // Offset to perfectly center vertically
    ],
  },
  boxThree: { backgroundColor: '#32cd32' },
});

export default BoxScreenChallenge;
