import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const FilterSlider = () => {
  return (
    <View>
      <View style={styles.priceContainer}>
        <Text style={styles.title}>Price Range</Text>
        <View style={styles.sliderContainer}>
          <Text style={styles.minPrice}>$25</Text>
          <Text style={styles.maxPrice}>$75</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  priceContainer: {
    width: 285,
    height: 96,
    marginTop: 40,
    marginBottom: 40,
  },
  title: {
    color: '#A3A3A3',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 33,
    textTransform: 'uppercase',
  },
  sliderContainer: {
    flexDirection: 'row',
  },
  minPrice: {
    position: 'absolute',
    left: 13.75,
    color: '#A3A3A3',
    fontSize: 15,
    marginBottom: 16,
  },
  maxPrice: {
    position: 'absolute',
    left: 129.25,
    color: '#A3A3A3',
    fontSize: 15,
  },
})

export default FilterSlider;