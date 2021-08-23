import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LargeNavbar from './LargeNavbar'

import { Ionicons } from '@expo/vector-icons';

const Filters = () => {
  return (
    <View>
      <LargeNavbar />
      <View style={styles.filterContainer} >
        <View style={styles.items} >
          <Text style={styles.text} > 67 Items </Text>
        </View>
        <View style={styles.list}>
          <Ionicons name="ios-list-outline" size={28} color="#74747A" />
        </View>
        <View style={styles.grid}>
          <Ionicons name="ios-grid-outline" size={28} color="#74747A" />
        </View>
        <View style={styles.adjust}>
          <Ionicons name="ios-options-outline" size={28} color="#74747A" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 56,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#D5D5E0',
  },
  items: {
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: '#D5D5E0',
  },
  text: {
    color: '#74747A',
    fontSize: 15,
  },
  list: {
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: '#D5D5E0',
  },
  grid: {
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: '#D5D5E0',
  },
  adjust: {
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Filters;