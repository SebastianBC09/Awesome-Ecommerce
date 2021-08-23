import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Brand = () => {
  return (
    <View style={styles.brandContainer}>
      <Text style={styles.title}>Brand</Text>
      <View style={styles.picker}>
        <Text style={styles.brand}>Ecco</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  brandContainer: {
    width: '100%',
    marginBottom: 40.5,
  },
  title: {
    color: '#A3A3A3',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 26,
    textTransform: 'uppercase'
  },
  picker: {
    borderColor: '#3D3D3D',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  brand: {
    color: '#A3A3A3',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 17.5,
    marginBottom: 17.5,
  }

});

export default Brand;