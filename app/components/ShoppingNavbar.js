import React from 'react';
import { View, StyleSheet, StatusBar, Text } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const ShoppingNavbar = () => {
  return (
    <View style={styles.navbarContainer}>
      <StatusBar style='auto' />
      <Ionicons name="ios-menu-outline" size={24} color="black" style={styles.menu} />
      <Text style={styles.title}>Shopping Cart (4) </Text>
      <Ionicons name="ios-ellipsis-vertical-sharp" size={24} color="black" style={styles.dots} />
    </View>
  );
}

const styles = StyleSheet.create({
  navbarContainer: {
    width: '100%',
    height: 45,
  },
  menu: {
    position: 'absolute',
    top: 12,
    left: 15
  },
  title: {
    position: 'absolute',
    top: 12,
    left: 53,
    color: '#131314',
    fontSize: 18,
    fontWeight: 'bold'
  },
  dots: {
    position: 'absolute',
    top: 12,
    right: 15,
  }
})

export default ShoppingNavbar;