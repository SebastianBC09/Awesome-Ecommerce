import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const Sizes = () => {
  return (
    <View style={styles.sizesContainer}>
      <Text style={styles.title}>Size</Text>
      <View style={styles.picker}>
        <View style={styles.sizeCircle}>
          <Text style={styles.size}>7</Text>
        </View>
        <View style={styles.sizeCircle}>
          <Text style={styles.size}>7.5</Text>
        </View>
        <View style={styles.sizeCircle}>
          <Text style={styles.size}>8</Text>
        </View>
        <View style={styles.sizeCircle}>
          <Text style={styles.size}>8.5</Text>
        </View>
        <View style={styles.sizeCircleR}>
          <Text style={styles.size}>9</Text>
        </View>
        <View style={styles.sizeCircle}>
          <Text style={styles.size}>9.5</Text>
        </View>
        <View style={styles.sizeCircleSelected}>
          <Text style={styles.sizeSelected}>10</Text>
        </View>
        <View style={styles.sizeCircle}>
          <Text style={styles.size}>10.5</Text>
        </View>
        <View style={styles.sizeCircle}>
          <Text style={styles.size}>11</Text>
        </View>
        <View style={styles.sizeCircleR}>
          <Text style={styles.size}>12</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sizesContainer: {
    width: 284,
    height: 160,
    marginBottom: 33.5,
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
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  size: {
    color: '#A3A3A3',
    fontSize: 16,
  },
  sizeSelected: {
    color: '#131314',
    fontSize: 16,
  },
  sizeCircle: {
    width: 44,
    height: 44,
    borderColor: '#3D3D3D',
    borderWidth: 1,
    borderRadius: 50,
    marginRight: 16,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sizeCircleR: {
    width: 44,
    height: 44,
    borderColor: '#3D3D3D',
    borderWidth: 1,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sizeCircleSelected: {
    width: 44,
    height: 44,
    backgroundColor: '#FFF',
    borderColor: '#3D3D3D',
    borderWidth: 1,
    borderRadius: 50,
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Sizes;