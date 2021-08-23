import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const Colors = () => {
  return (
    <View style={styles.colorsContainer}>
      <Text style={styles.title}>Color</Text>
      <View style={styles.picker}>
        <View style={styles.colorCircle1} />
        <View style={styles.colorCircle2} />
        <View style={styles.colorCircle3} />
        <View style={styles.colorCircle4} />
        <View style={styles.colorCircle5}>
          <Ionicons name="ios-checkmark" size={24} color="#FFF" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  colorsContainer: {
    width: 284,
    height: 94,
    marginBottom: 40,
  },
  title: {
    color: '#A3A3A3',
    fontSize: 15,
    alignSelf: 'center',
    marginBottom: 33,
    textTransform: 'uppercase'
  },
  picker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  colorCircle1: {
    width: 44,
    height: 44,
    backgroundColor: '#FFF',
    borderRadius: 50,
  },
  colorCircle2: {
    width: 44,
    height: 44,
    backgroundColor: '#C69C6D',
    borderRadius: 50,
  },
  colorCircle3: {
    width: 44,
    height: 44,
    backgroundColor: '#846DC6',
    borderRadius: 50,
  },
  colorCircle4: {
    width: 44,
    height: 44,
    backgroundColor: '#6DC684',
    borderRadius: 50,
  },
  colorCircle5: {
    width: 44,
    height: 44,
    backgroundColor: '#E76D6D',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default Colors;