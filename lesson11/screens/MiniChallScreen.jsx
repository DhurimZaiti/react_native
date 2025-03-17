import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const LayoutPracticeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Layout Properties Practice</Text>

      {/* Padding Example */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Padding</Text>
        <View style={styles.paddingBox}><Text>Padding Inside</Text></View>
      </View>

      {/* Margin Example */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Margin</Text>
        <View style={styles.marginBox}><Text>Margin Outside</Text></View>
      </View>

      {/* Flex Direction Example */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Flex Direction (Row)</Text>
        <View style={styles.flexRowBox}>
          <View style={styles.flexItem}><Text>1</Text></View>
          <View style={styles.flexItem}><Text>2</Text></View>
          <View style={styles.flexItem}><Text>3</Text></View>
        </View>
      </View>

      {/* Justify Content Example */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Justify Content</Text>
        <View style={styles.justifyContentBox}>
          <View style={styles.flexItem}><Text>A</Text></View>
          <View style={styles.flexItem}><Text>B</Text></View>
          <View style={styles.flexItem}><Text>C</Text></View>
        </View>
      </View>

      {/* Align Items Example */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Align Items</Text>
        <View style={styles.alignItemsBox}>
          <View style={styles.flexItem}><Text>X</Text></View>
          <View style={styles.flexItem}><Text>Y</Text></View>
          <View style={styles.flexItem}><Text>Z</Text></View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f4f4f4' },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  section: { marginBottom: 30 },
  sectionTitle: { fontSize: 18, fontWeight: '600', marginBottom: 10 },
  
  // Padding Example
  paddingBox: { padding: 20, backgroundColor: '#ffcccb', alignItems: 'center', borderRadius: 8 },

  // Margin Example
  marginBox: { margin: 20, backgroundColor: '#add8e6', padding: 10, alignItems: 'center', borderRadius: 8 },
  
  // Flex Direction Example
  flexRowBox: { flexDirection: 'row', gap: 10, justifyContent: 'center' },
  flexItem: { backgroundColor: '#90ee90', padding: 10, borderRadius: 5, alignItems: 'center' },
  
  // Justify Content Example
  justifyContentBox: { flexDirection: 'row', justifyContent: 'space-between', padding: 10, backgroundColor: '#ffeb3b', borderRadius: 8 },
  
  // Align Items Example
  alignItemsBox: { flexDirection: 'row', alignItems: 'center', height: 100, backgroundColor: '#ffa07a', borderRadius: 8 },
});

export default LayoutPracticeScreen;
