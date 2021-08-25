import React from 'react';
import { View, StyleSheet, StatusBar, Text } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const FiltersNavbar = () => {
  return (
    <View style={styles.filterBar}>
      <StatusBar style='auto' />
      <Ionicons name="ios-close" size={24} color="#686869" style={styles.close} />
      <Text style={styles.title}>Filters</Text>
      <Ionicons name="ios-ellipsis-vertical" size={24} color="#686869" style={styles.dots} />
    </View>
  );
};

const styles = StyleSheet.create({
  filterBar: {
    width: '100%',
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  close: {
    position: 'absolute',
    top: 12,
    left: 16,
  },
  title: {
    color: '#A3A3A3',
    fontSize: 18,
  },
  dots: {
    position: 'absolute',
    top: 12,
    right: 16,
  }
});

export default FiltersNavbar;