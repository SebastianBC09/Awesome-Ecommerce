import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const NavigationBar = () => {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Ionicons name="ios-menu-outline" size={24} color="black" style={styles.menu} />
      <Ionicons name="ios-search-outline" size={24} color="black" style={styles.search} />
      <Ionicons name="ios-cart-outline" size={24} color="black" style={styles.cart} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 45,
  },
  menu: {
    position: 'absolute',
    top: 12,
    left: 16,
  },
  search: {
    position: 'absolute',
    top: 12,
    right: 77,
  },
  cart: {
    position: 'absolute',
    top: 12,
    right: 29,
  }
})

export default NavigationBar;