import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AdvancedBoxScreenChallenge = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.box, styles.boxLeft]}>Box 1</Text>
      <Text style={[styles.box, styles.boxCenter]}>Box 2</Text>
      <Text style={[styles.box, styles.boxRight]}>Box 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',  // Stack the boxes vertically
    justifyContent: 'space-evenly',  // Distribute space evenly between boxes
    backgroundColor: '#f4f4f4',
  },
  box: {
    height: '33%',  // Each box takes up equal height (1/3 of the screen)
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    lineHeight: 80,  // To vertically center text within the box
    borderRadius: 5,
  },
  boxLeft: { 
    backgroundColor: '#ff6347',
    alignSelf: 'flex-start',  // Align the first box to the left
  },
  boxCenter: { 
    backgroundColor: '#4682b4',
    alignSelf: 'center',  // Align the second box to the center
  },
  boxRight: { 
    backgroundColor: '#32cd32',
    alignSelf: 'flex-end',  // Align the third box to the right
  },
});

export default AdvancedBoxScreenChallenge;
